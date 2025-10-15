import slugify from "slugify";

/**
 * Formats a string into a URL-friendly slug.
 * e.g. "Hello World!" -> "hello-world"
 * @param value string - The input string to format.
 * @returns string - The formatted slug.
 */
export const formatSlug = (value: string) =>
  slugify(value, { lower: true, strict: true, replacement: "-", trim: true });
