# tailwind-plugin-rem-basis
> Responsive rem scaling for design mockups.
> 一个 Tailwind CSS 插件，用于实现响应式 rem 缩放，以更好地适应设计稿。

## installation
```bash
yarn add --dev @jswork/tailwind-plugin-rem-basis
# 或者使用 npm
npm install --save-dev @jswork/tailwind-plugin-rem-basis
```

## usage
> 在 `tailwind.config.js` 文件中添加插件：

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    require('@jswork/tailwind-plugin-rem-basis')({
      // 插件配置选项 (可选)
      // preset: '375', // 使用预设配置，例如 '375' 或 '390'
      // designWidth: 375, // 设计稿宽度，默认 390
      // baseFontSize: 16, // 基准字体大小，默认 16px
      // minFontSize: 16, // 最小字体大小，默认 16px
      // maxFontSize: 20 // 最大字体大小，默认 20px
    }),
  ],
};
```

### configuration

插件支持以下配置选项：

- `preset` (可选): 使用预设的设计稿宽度配置。目前支持 `'375'` 和 `'390'`。如果设置了 `preset`，则会忽略 `designWidth`, `baseFontSize`, `minFontSize`, `maxFontSize` 的自定义设置，除非您手动覆盖它们。
- `designWidth` (可选): 设计稿的宽度（单位：px）。插件会根据此宽度计算 `vw` 比例。默认值为 `390`。
- `baseFontSize` (可选): 基准字体大小（单位：px）。用于计算 `vw` 值的基准。默认值为 `16`。
- `minFontSize` (可选): 最小字体大小（单位：px）。`clamp` 函数的最小值。默认值为 `16`。
- `maxFontSize` (可选): 最大字体大小（单位：px）。`clamp` 函数的最大值。默认值为 `20`。

### principles

该插件通过在 `:root` 元素上设置 `font-size` 属性来实现响应式缩放，使用了 CSS `clamp()` 函数。`clamp()` 函数允许您设置一个字体大小的最小值、首选值和最大值。

计算公式如下：

`font-size: clamp(minFontSize, (baseFontSize / designWidth) * 100vw, maxFontSize);`

例如，如果 `designWidth` 为 `390`，`baseFontSize` 为 `16`，则 `vw` 比例为 `(16 / 390) * 100 = 4.103vw`。最终生成的 CSS 可能是：

```css
/* 默认：手机（基于 390px 设计稿） */
:root {
  font-size: clamp(16px, 4.1vw, 20px); /* 390 × 4.1% ≈ 16px */
}

/* 平板及以上：使用 768px 为基准，1rem ≈ 18px */
@media (min-width: 768px) {
  :root {
    font-size: clamp(18px, 2.34vw, 22px); /* 18 / 768 ≈ 0.0234 → 2.34vw */
  }
}
```

这使得字体大小在不同屏幕尺寸下能够平滑过渡，并保持在设定的最小和最大值之间。

## example

假设您有一个设计稿宽度为 `375px`，并且希望基准字体大小为 `14px`，最小 `12px`，最大 `18px`：

```javascript
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('@jswork/tailwind-plugin-rem-basis')({
      designWidth: 375,
      baseFontSize: 14,
      minFontSize: 12,
      maxFontSize: 18
    }),
  ],
};
```
