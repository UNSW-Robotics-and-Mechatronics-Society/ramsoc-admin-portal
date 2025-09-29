#!/usr/bin/env node
/* eslint-disable */
// Combined patcher: add header + fix import paths in prisma/generated

import {
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
  type PathLike,
} from "fs";
import { basename, extname, join } from "path";

// ANSI color helpers
const COLORS = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  magenta: "\x1b[35m",
};

const ROOT = process.cwd();
const REPO_NAME = basename(ROOT);
const DIR = join(ROOT, "prisma", "generated");

// Header to prepend for TypeScript files
const HEADER = `// @ts-nocheck\n/* eslint-disable */\n\n`;

// Replacement mapping for import paths
const FROM_SINGLE = "./helpers/json-helpers";
const FROM_DOUBLE = '"./helpers/json-helpers"';
const TO_SINGLE = "../helpers/json-helpers";
const TO_DOUBLE = '"../helpers/json-helpers"';

// File extensions to consider for replacement
const REPLACE_EXTS = new Set([".ts", ".tsx", ".js", ".jsx"]);
// Extensions to also add header to (only TS files)
const HEADER_EXTS = new Set([".ts", ".tsx"]);

let totalFiles = 0;
let headerPatchedFiles = 0;
let headerSkippedFiles = 0;
const headerSkippedReasons = new Map<string, number>();

let replaceVisitedFiles = 0;
let replacedFiles = 0;
let replacedOccurrences = 0;

let errorFiles = 0;
const errors: { file: string; error: unknown }[] = [];

const start = Date.now();

function nowIso() {
  return new Date().toLocaleTimeString();
}

function incMap(map: Map<string, number>, key: string) {
  map.set(key, (map.get(key) ?? 0) + 1);
}

/**
 * Replace the old console.log behavior with an in-place updating line.
 * If stdout is a TTY we update the same line using carriage return and
 * clear-to-end-of-line. If not a TTY (e.g. CI), fallback to console.log.
 */
function logDir(path: string) {
  const msg = `${COLORS.yellow}⎆ Entering: ${path}${COLORS.reset}`;
  if (process.stdout.isTTY) {
    // '\r' returns to line start; '\x1b[K' clears to end of line
    process.stdout.write(`\r${msg}\x1b[K`);
  } else {
    console.log(msg);
  }
}

function processFile(full: string) {
  totalFiles++;
  const ext = extname(full).toLowerCase();

  let content: string;
  try {
    content = readFileSync(full, "utf8");
  } catch (err) {
    errorFiles++;
    errors.push({ file: full, error: err });
    // error should be visible, print with newline
    console.error(`${COLORS.red}˟ Failed to read ${full}:${COLORS.reset}`, err);
    return;
  }

  // ---------- Header logic (only for TS files) ----------
  let headerChanged = false;
  if (HEADER_EXTS.has(ext)) {
    // skip if header already present at top or anywhere
    if (
      content.startsWith("// @ts-nocheck") ||
      content.includes("/* eslint-disable */")
    ) {
      headerSkippedFiles++;
      incMap(headerSkippedReasons, "already_patched");
      // keep these quiet (user asked to reduce logs)
    } else if (
      content.includes("// @ts-nocheck") ||
      content.includes("/* eslint-disable */")
    ) {
      headerSkippedFiles++;
      incMap(headerSkippedReasons, "header_found_elsewhere");
      // quiet
    } else {
      // Prepend header
      content = HEADER + content;
      headerPatchedFiles++;
      headerChanged = true;
    }
  }

  // ---------- Replacement logic (for ts/js files) ----------
  if (REPLACE_EXTS.has(ext)) {
    replaceVisitedFiles++;
    let replaced = false;
    let occurrencesForFile = 0;

    // count and replace unquoted occurrence
    if (content.includes(FROM_SINGLE)) {
      // count occurrences using split
      const parts = content.split(FROM_SINGLE);
      occurrencesForFile += parts.length - 1;
      content = parts.join(TO_SINGLE);
      replaced = true;
    }

    // replace quoted variant (double-quoted)
    if (content.includes(FROM_DOUBLE)) {
      const parts2 = content.split(FROM_DOUBLE);
      occurrencesForFile += parts2.length - 1;
      content = parts2.join(TO_DOUBLE);
      replaced = true;
    }

    if (replaced) {
      replacedFiles++;
      replacedOccurrences += occurrencesForFile;
    }
  }

  // If we modified the content (header or replacement), write back
  if (headerChanged || (REPLACE_EXTS.has(ext) && content)) {
    try {
      // final safety: avoid rewriting with same content (headerChanged ensures different)
      const previous = readFileSync(full, "utf8");
      if (previous !== content) {
        writeFileSync(full, content, "utf8");
      }
    } catch (err) {
      errorFiles++;
      errors.push({ file: full, error: err });
      console.error(
        `${COLORS.red}˟ Failed to write ${full}:${COLORS.reset}`,
        err
      );
    }
  }
}

function walk(p: PathLike) {
  const pathStr = p.toString();
  // update the same line with current directory being processed
  logDir(pathStr);

  let entries;
  try {
    entries = readdirSync(p, { withFileTypes: true });
  } catch (err) {
    console.error(
      `${COLORS.red}˟ Failed to read dir ${pathStr}:${COLORS.reset}`,
      err
    );
    return;
  }

  for (const e of entries) {
    const full = join(pathStr, e.name);
    if (e.isDirectory()) {
      walk(full);
      continue;
    }

    // only care about code files
    const ext = extname(e.name).toLowerCase();
    if (!REPLACE_EXTS.has(ext) && !HEADER_EXTS.has(ext)) continue;

    // ignore very large files for safety (optional)
    try {
      const st = statSync(full);
      if (st.size > 10 * 1024 * 1024) {
        incMap(headerSkippedReasons, "large_file");
        continue;
      }
    } catch {
      // ignore stat errors and attempt to process file
    }

    processFile(full);
  }
}

/* ---------- run ---------- */
console.log(
  `${COLORS.cyan}${COLORS.bright}Starting patch run${COLORS.reset} — adding header + fixing import paths in generated files under: ${DIR}`
);
console.log(`${COLORS.dim}${nowIso()} - walking ${DIR}${COLORS.reset}`);

try {
  walk(DIR);
} catch (err) {
  console.error(
    `${COLORS.red}Fatal error walking directory:${COLORS.reset}`,
    err
  );
}

// ensure we move cursor to next line before printing summary,
// otherwise the summary will overwrite the last in-place line
if (process.stdout.isTTY) process.stdout.write("\n");

const elapsedMs = Date.now() - start;

console.log(`\n${COLORS.cyan}${COLORS.bright}=== Summary ===${COLORS.reset}`);
console.log(
  `${COLORS.bright}Total files visited:${COLORS.reset} ${totalFiles}`
);
console.log(
  `${COLORS.green}Header patched:${COLORS.reset} ${headerPatchedFiles}`
);
console.log(
  `${COLORS.yellow}Header skipped:${COLORS.reset} ${headerSkippedFiles}`
);
if (headerSkippedReasons.size > 0) {
  console.log(`${COLORS.dim}Header skip reasons:`);
  for (const [k, v] of headerSkippedReasons) {
    console.log(`  - ${k}: ${v}`);
  }
}
console.log(
  `${COLORS.magenta}Files checked for replacement:${COLORS.reset} ${replaceVisitedFiles}`
);
console.log(
  `${COLORS.magenta}Files changed by replacement:${COLORS.reset} ${replacedFiles}`
);
console.log(
  `${COLORS.magenta}Replacement occurrences:${COLORS.reset} ${replacedOccurrences}`
);
console.log(`${COLORS.red}Errors:${COLORS.reset} ${errorFiles}`);
if (errors.length > 0) {
  console.log(`${COLORS.red}Files with errors:${COLORS.reset}`);
  for (const e of errors) {
    console.log(`${COLORS.red}  - ${e.file}${COLORS.reset}`);
  }
}
console.log(`${COLORS.cyan}Done in ${elapsedMs}ms${COLORS.reset}`);

if (replacedFiles === 0 && headerPatchedFiles === 0 && errorFiles === 0) {
  console.log(`${COLORS.yellow}No changes necessary.${COLORS.reset}`);
}
