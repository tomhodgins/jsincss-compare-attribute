export default (selector, attribute, test, stylesheet) => {

  let styles = ''
  let count = 0

  document.querySelectorAll(selector).forEach(tag => {

    const attr = (selector+attribute+test).replace(/\W/g, '')

    if (test(attribute === 'value' ? tag.value : tag.getAttribute(attribute))) {

      styles += stylesheet.replace(/:self|\$this/g, `[data-compare-${attr}="${count}"]`)
      tag.setAttribute(`data-compare-${attr}`, count)
      count++

    } else {

      tag.setAttribute(`data-compare-${attr}`, '')

    }

  })

  return styles

}