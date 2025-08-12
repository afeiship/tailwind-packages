# @jswork/tgv-transformer

> Tailwind group variant toolkits.

[![version](https://img.shields.io/npm/v/@jswork/tgv-transformer)][version-url]
[![license](https://img.shields.io/npm/l/@jswork/tgv-transformer)][license-url]
[![size](https://img.shields.io/bundlephobia/minzip/@jswork/tgv-transformer)][size-url]
[![download](https://img.shields.io/npm/dm/@jswork/tgv-transformer)][download-url]

## Installation

```bash
npm install @jswork/tgv-transformer
```

## Usage

### `tgv` function

The `tgv` function helps you write responsive Tailwind CSS classes more concisely by transforming breakpoint-prefixed styles.

```typescript
import { tgv } from '@jswork/tgv-transformer';

const classes = tgv`
  md:(w-full,h-full),
  lg:(w-auto,h-auto)
`;
// Result: "md:w-full md:h-full lg:w-auto lg:h-auto"
```

### example
```js
import { tgv } from '@jswork/tgv-transformer';
import cx from 'classnames';

function App() {
  return (
    <div>
      <fieldset className="layout-fieldset-divider text-center text-gray-300">
        <legend className="px-4 text-black">OR</legend>
      </fieldset>
      <div>
        <h3 className="sm:text-2xl md:text-3xl lg:text-4xl">
          Just test responsive text size
        </h3>
        <div
          className={cx(
            'flex debug flex-wrap *:size-20 *:bg-gray-200 gap-4',
            tgv`sm:(text-xs, grid-cols-1) md:(text-2xl, grid-cols-2) lg:(text-3xl, grid-cols-3)`
          )}>
          <div className="item">item1</div>
          <div className="item2">item2</div>
          <div className="item3">item3</div>
          <div className="item4">item4</div>
          <div className="item5">item5</div>
          <div className="item6">item7</div>
          <div className="item7">item8</div>
          <div className="item8">item9</div>
        </div>
      </div>
    </div>
  );
}

export default App;
```

### `twTransform` function

The `twTransform` function processes Tailwind CSS variant groups, expanding them into individual classes.

```typescript
import { twTransform } from '@jswork/tgv-transformer';

const code = `
  <div class="hover:(bg-red-500 text-white) focus:(ring-2 ring-blue-300)"></div>
`;
const transformedCode = twTransform(code);
// Result: "<div class=\"hover:bg-red-500 hover:text-white focus:ring-2 focus:ring-blue-300\"></div>"
```

## API

### `tgv(input: TemplateStringsArray, ...args: any[]): string`

Transforms template literal strings containing breakpoint-prefixed styles into a space-separated string of Tailwind classes.

- `input`: A template literal string array.
- `...args`: Any arguments passed to the template literal.

Returns a string of transformed Tailwind classes.

### `twTransform(code: string): string`

Transforms a string (e.g., HTML or JavaScript code) by expanding Tailwind CSS variant groups into individual classes.

- `code`: The input string containing Tailwind variant groups.

Returns a string with transformed Tailwind classes.

## License

Code released under [the MIT license](https://github.com/afeiship/tgv-transformer/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/tgv-transformer
[version-url]: https://npmjs.org/package/@jswork/tgv-transformer

[license-image]: https://img.shields.io/npm/l/@jswork/tgv-transformer
[license-url]: https://github.com/afeiship/tgv-transformer/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/tgv-transformer
[size-url]: https://github.com/afeiship/tgv-transformer/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/tgv-transformer
[download-url]: https://www.npmjs.com/package/@jswork/tgv-transformer
