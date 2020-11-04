import postcss, { Result } from "postcss";

import { serializeCSS } from "./utils";

// string snaphsots should not add the string output
expect.addSnapshotSerializer({
  test: (val) => val instanceof postcss.Result,
  print: (val: unknown) => {
    return serializeCSS((val as Result).css);
  },
});
