module.exports = (selector, attribute, test, stylesheet) => {
  const attr = (selector + attribute + test).replace(/\W/g, '')
  const result = Array.from(document.querySelectorAll(selector))
    .reduce((output, tag, count) => {
      if (
        test(
          attribute === 'value'
          ? tag.value
          : tag.getAttribute(attribute)
        )
      ) {
        output.add.push({tag: tag, count: count})
        output.styles.push(
          stylesheet.replace(
            /:self|\$this|\[--self\]/g,
            `[data-compare-${attr}="${count}"]`
          )
        )
      } else {
        output.remove.push(tag)
      }
      return output
    }, {add: [], remove: [], styles: []})
  result.add.forEach(tag => tag.tag.setAttribute(`data-compare-${attr}`, tag.count))
  result.remove.forEach(tag => tag.setAttribute(`data-compare-${attr}`, ''))
  return result.styles.join('\n')
}
