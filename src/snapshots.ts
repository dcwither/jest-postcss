import postcss, { Result } from "postcss";

import prettier from "prettier";

// string snaphsots should not add the string output
expect.addSnapshotSerializer({
  test: (val) => val instanceof postcss.Result,
  print: (val: unknown) => {
    return (
      prettier
        // TODO: allow for different parsers?
        .format((val as Result).css, { parser: "scss" })
        // simplify empty rules
        .replace(/\{\s*\}/g, "{}")
        .trim()
    );
  },
});
