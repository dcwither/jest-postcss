import "./result-snapshot-serializer";

import postcss from "postcss";

describe("result-snapshot-serializer", () => {
  it("serializes a snapshot of a postcss result", async () => {
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
    ).toMatchInlineSnapshot(`
      .class {
        color: #0000ff;
      }
    `);
  });
});
