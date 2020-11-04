import prettier from "prettier";

export function serializeCSS(css: string) {
  return (
    prettier
      // TODO: allow for different parsers?
      .format(css, { parser: "scss" })
      // simplify empty rules
      .replace(/\{\s*\}/g, "{}")
      .trim()
  );
}
