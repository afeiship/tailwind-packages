/**
 * 适合场景:
 * 1. 兼容性要求较高的图片展示场景
 * 2. 需要保持图片比例的场景
 * 3. 需要响应式图片展示的场景
 * 4. 需要在不同屏幕尺寸下保持图片比例的场景
 * 5. 需要在不同设备上保持图片比例的
 *
 * value 计算:
 *  value = width / height * 100
 * <figure className="layout-aspect-view-[33.33] debug my-5">
 *   <img className='is-aspect-content' src="https://dummyimage.com/1200x400" />
 * </figure>
 */
const baseViewStyles = {
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
}

const baseAspectContentStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}

const baseAspectImageStyles = {
  ...baseAspectContentStyles,
  objectFit: 'cover',
}

function calcPercent(value) {
  const [width, height] = value.split(',')
  if (!width || !height) {
    return '100%'
  }
  return ((parseFloat(height) / parseFloat(width)) * 100).toFixed(2) + '%'
}

module.exports = function (pluginApi) {
  const { matchComponents, addBase } = pluginApi

  addBase({ '[class*="layout-aspect-"]': { ...baseViewStyles } })
  addBase({ '[class*="is-aspect-content"]': { ...baseAspectContentStyles } })
  addBase({ '[class*="is-aspect-img"]': { ...baseAspectImageStyles } })

  matchComponents({
    'layout-aspect-view': (value) => {
      const paddingTop = calcPercent(value)
      return { paddingTop }
    },
    'layout-aspect-img': (value) => {
      const paddingTop = calcPercent(value)
      return {
        paddingTop,
        '& > img': {
          ...baseAspectImageStyles,
        },
      }
    },
  })
}
