// plugins/tailwind-plugin-rem-basis/src/index.js

// 📏 预设配置：designWidth → { designWidth, baseFontSize, minFontSize, maxFontSize }
const PRESETS = {
  375: {
    designWidth: 375,
    baseFontSize: 16,
    minFontSize: 16,
    maxFontSize: 20
  },
  390: {
    designWidth: 390,
    baseFontSize: 16,
    minFontSize: 16,
    maxFontSize: 20
  }
  // 可扩展更多
  // '414': { designWidth: 414, baseFontSize: 18, minFontSize: 16, maxFontSize: 22 },
};

/** @type {import('tailwindcss').PluginCreator} */
module.exports = function (options = {}) {
  return function ({ addBase }) {
    const { preset, ...customConfig } = options;

    // 🔎 优先使用自定义配置，否则使用预设，否则使用 fallback
    let config;
    if (customConfig.designWidth) {
      // 手动配置优先
      config = {
        baseFontSize: 16,
        minFontSize: 16,
        maxFontSize: 20,
        ...customConfig
      };
    } else if (preset && PRESETS[preset]) {
      config = PRESETS[preset];
    } else {
      // 默认 fallback（390）
      config = PRESETS['390'];
    }

    // 💡 计算 vw 比例：baseFontSize / designWidth * 100 = x vw
    const vwRatio = ((config.baseFontSize / config.designWidth) * 100).toFixed(3);

    // 🎨 生成 clamp 值：clamp(min, x.vw, max)
    const fontSizeValue = `clamp(${config.minFontSize}px, ${vwRatio}vw, ${config.maxFontSize}px)`;

    // 🧱 注入 :root 样式
    addBase({
      ':root': {
        'font-size': fontSizeValue
      }
    });
  };
};
