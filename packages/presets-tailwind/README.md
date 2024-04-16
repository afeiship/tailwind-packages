# presets-tailwind
> Presets for me.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/presets-tailwind
```

## usage
```js
/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('@jswork/presets-tailwind')],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  }
};
```

## license
Code released under [the MIT license](https://github.com/afeiship/presets-tailwind/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/presets-tailwind
[version-url]: https://npmjs.org/package/@jswork/presets-tailwind

[license-image]: https://img.shields.io/npm/l/@jswork/presets-tailwind
[license-url]: https://github.com/afeiship/presets-tailwind/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/presets-tailwind
[size-url]: https://github.com/afeiship/presets-tailwind/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/presets-tailwind
[download-url]: https://www.npmjs.com/package/@jswork/presets-tailwind
