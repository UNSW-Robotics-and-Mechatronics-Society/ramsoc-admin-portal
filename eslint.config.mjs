export const root = true;
export const plugins = ["import", "boundaries"];
export const eslintExtends = ["next/core-web-vitals"];
export const settings = {
  "boundaries/elements": [
    { type: "app", pattern: "apps/*" },
    { type: "package", pattern: "packages/*" }
  ]
};
export const rules = {
  "boundaries/element-types": [2, {
    default: "disallow",
    rules: [
      { from: "app", to: "package", allow: ["*"] },
      { from: "app", to: "app", disallow: ["*"] },
      { from: "package", to: "app", disallow: ["*"] }
    ]
  }],
  "import/no-relative-parent-imports": "error"
};
