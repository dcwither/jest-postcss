import "./extend-expect";

import postcss from "postcss";
import stripAnsi from "strip-ansi";

describe("to-match-css", () => {
  it("should pass with matching css", async () => {
    expect(
      await postcss({
        postcssPlugin: "identity",
        Once() {},
      }).process(
        `
          .class {
            color: #0000FF;
          }
        `,
        { from: "CSS" }
      )
    ).toMatchCSS(`
      .class {
        color: #0000ff;
      }
    `);
  });

  it("should fail with a helpful message", async () => {
    expect.assertions(2);
    try {
      expect(
        await postcss({
          postcssPlugin: "identity",
          Once() {},
        }).process(
          `
            .class {
              color: #0000FF;
            }
          `,
          { from: "CSS" }
        )
      ).toMatchCSS(`
        .class {}
      `);
    } catch (error) {
      error.message = stripAnsi(error.message);
      expect(error).toMatchInlineSnapshot(`
        [Error: expect(received).toMatchCSS(expected)

        - Expected
        + Received

        - .class {}
        + .class {
        +   color: #0000ff;
        + }]
      `);
    }
  });
});
