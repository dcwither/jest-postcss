import { Result } from "postcss";
import { serializeCSS } from "./utils";

// string snaphsots should not add the string output
expect.addSnapshotSerializer({
  test: (val: unknown) => {
    return (
      val &&
      typeof val === "object" &&
      Object.prototype.hasOwnProperty.call(val, "css")
    );
  },
  print: (val: unknown) => {
    return serializeCSS((val as Result).css);
  },
});
