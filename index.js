export default (selector, attribute, test, stylesheet) => {

  let styles = ''
  let count = 0

  Array.from(document.querySelectorAll(selector))
    .filter(tag => test(attribute === 'value' ? tag.value : tag.getAttribute(attribute)))
    .forEach(tag => {

      const attr = selector.replace(/\W/g, '')

      styles += stylesheet.replace(/:self|\$this/g, `[data-compare-${attr}="${count}"]`)
      tag.setAttribute(`data-compare-${attr}`, count)
      count++

    })

  return styles

}