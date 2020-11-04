import { Result } from "postcss";
import { serializeCSS } from "./utils";

export default function toMatchCSS(
  this: jest.MatcherContext,
  result: Result,
  css: string
) {
  const expected = serializeCSS(css);
  const received = serializeCSS(result.css);

  return {
    pass: expected === received,
    message: () => {
      const matcher = `${this.isNot ? ".not" : ""}.toMatchCSS`;
      return [
        this.utils.matcherHint(matcher),
        "",
        this.utils.diff(expected, received),
      ].join("\n");
    },
  };
}
