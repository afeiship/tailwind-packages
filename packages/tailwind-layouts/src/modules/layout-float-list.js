// @ref: https://chat.qwen.ai/c/b3aa92c3-38ab-4a6f-8f76-fd30a98fe3f1
// @ref: last row: https://js.work/tryit/7659beb70db5f
/**
 * @example:
<div class="layout-float-list-[3,20px,10px]">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
 */

const val = (value) => {
  if (!value) return ''
  // 支持数字自动转 rem（如 16 -> 4rem），或保留 px/unit
  return value?.includes('px') || value?.includes('rem') || value?.includes('%')
    ? value
    : `${parseFloat(value) / 4}rem`
}

module.exports = function (pluginApi) {
  const { addBase, matchComponents, theme } = pluginApi

  // 基础样式：容器和子项
  addBase({
    '[class*="layout-float-list-"]': {
      overflow: 'hidden',
    },
    '[class*="layout-float-list-"] > *': {
      float: 'left',
      boxSizing: 'border-box',
    },
  })

  matchComponents(
    {
      'layout-float-list': (value) => {
        // 解析 value: "3,20px,10px" 或 "3,10px"（y 缺省为 x）
        const parts = value.split(',').map((v) => v.trim())
        const n = parseInt(parts[0], 10) // 列数
        const xValue = val(parts[1]) // gap-x
        const yValue = val(parts[2] ?? parts[1]) // gap-y，缺省等于 gap-x

        if (isNaN(n) || n <= 0) {
          console.warn('Invalid column count in layout-float-list:', value)
          return {}
        }

        const result = {}

        // 子项样式
        result['> *'] = {
          marginRight: xValue,
          marginBottom: yValue,
          width: `calc((100% - ${xValue} * ${n - 1}) / ${n})`,
        }

        // 每行最后一个：清除 marginRight
        const lastInRow = `& > *:nth-child(${n}n)`
        result[lastInRow] = {
          marginRight: 0,
        }

        // 最后一行的所有元素：清除 marginBottom
        // 匹配最后 n 个元素
        // const lastRowSelector = `& > *:nth-last-child(-n + ${n}), & > *:nth-last-child(-n + ${n}) ~ *:nth-last-child(-n + ${n})`
        // 更简单写法：直接用 &:nth-last-child(-n + N)
        result['> *:nth-last-child(-n + ' + n + ')'] = {
          marginBottom: 0,
        }

        return result
      },
    },
    {
      // 可选：从 theme 读取预设值
      values: Object.fromEntries(Array.from({ length: 12 }, (_, i) => [`${i + 1}`, `${i + 1}`])),
      // 例如支持：layout-float-list-3 → 等价于 layout-float-list-[3]
      // 但我们现在用 matchComponents 接受任意字符串
      resolveWhitespace: false,
      supportsNegativeValues: false,
    }
  )
}
