function compare(selector, attribute, test, stylesheet) {

  return Array.from(document.querySelectorAll(selector))

    .reduce((styles, tag, count) => {

      const attr = (selector + attribute + test).replace(/\W/g, '')

      if (test(attribute === 'value' ? tag.value : tag.getAttribute(attribute))) {

        tag.setAttribute(`data-compare-${attr}`, count)
        styles += stylesheet.replace(
          /:self|\$this/g,
          `[data-compare-${attr}="${count}"]`
        )
  
      } else {

        tag.setAttribute(`data-compare-${attr}`, '')

      }

      return styles

    }, '')

}
