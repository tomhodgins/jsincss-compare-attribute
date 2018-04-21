mixin('compare', ['selector', 'attribute', 'test', 'stylesheet'],
  returnValue('Array.from(document.querySelectorAll(selector))',
    plainReduce(
      createAttribute(['selector', 'attribute', 'test'],
        ifElseReset(
          'test(attribute === \'value\' ? tag.value : tag.getAttribute(attribute))',
          'tag',
          'compare')))))
