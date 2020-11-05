# jest-postcss
Jest utils for postcss plugins

## Installation

```bash
npm install --save-dev jest-postcss
```

## Usage
Import `jest-postcss` into your test setup once.

```js
import "jest-postcss"
```

## Matchers

### `.toMatchCSS`

```ts
toMatchCSS(css: string)
```

Compares the postcss result css against the Provided CSS

```js
expect(
  await postcss(plugins).process()
).toMatchCSS(`
  .your-css {}
`)
```

## Snapshot Serializers

Allows use of snapshot testing with postcss results, pretifying the CSS for consistency.

```js
expect(
  await postcss(plugins).process()
).toMatchSnapshot()
```

```js
expect(
  await postcss(plugins).process()
).toMatchInlineSnapshot()
```
