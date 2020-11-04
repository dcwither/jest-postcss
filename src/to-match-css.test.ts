import "./extend-expect";

import postcss from "postcss";

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
    await expect(async () =>
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
        }
      `)
    ).rejects.toMatchInlineSnapshot(`
      [Error: [2mexpect([22m[31mreceived[39m[2m).toMatchCSS([22m[32mexpected[39m[2m)[22m

      [32m- Expected[39m
      [31m+ Received[39m

      [32m- .class {}[39m
      [31m+ .class {[39m
      [31m+   color: #0000ff;[39m
      [31m+ }[39m]
    `);
  });
});
