# jsincss-compare-attribute

An attribute comparison plugin for [jsincss](https://github.com/tomhodgins/jsincss)

## About

This plugin is a JavaScript module that works with [JS-in-CSS stylesheets](https://responsive.style/theory/what-is-a-jic-stylesheet.html), to add comparison operators for selecting elements by attribute values.

## Downloading

You can download `index.js` and add it to your codebase, or download it with npm:

```bash
npm install jsincss-compare-attribute
```

Another option that works for building or testing, that isn't ideal for production use, is linking to the module directly from a CDN like unpkg:

```html
<script type=module>
  import compare from 'https://unpkg.com/jsincss-compare-attribute/index.js'
</script>
```

## Importing

You can import the plugin into your own JavaScript modules in a couple of ways.

The first way is using the native [`import` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) in JavaScript. Here you can assign any name you want to the function you are importing, and you only need to provide a path to the plugin's `index.js` file:

```js
import compare from './node_modules/jsincss-compare-attribute/index.js'
```

If you want to use `require` to load this plugin instead, and use a bundler like Webpack or Parcel, make sure to add `.default` as you require it:

```js
const compare = require('jsincss-compare-attribute').default
```

Once you have imported this plugin into your module, you can use the plugin as `compare()`

## Using JS-in-CSS Stylesheets

The main goal of this plugin is to allow CSS authors the ability to use comparison operators like less than (`<`), less or equals (`<=`), greater or equals (`>=`), and greater than (`>`) to select elements by comparing the value of an attribute they have.

The plugin has the following format:

```js
compare(selector, attribute, test, stylesheet)
```

- `selector` is a string containing a CSS selector
- `attribute` is a string containing the attribute you are testing
- `test` is a function containing a test for each element matching the selector
- `stylesheet` is a string or template string containing a CSS stylesheet, where `:self` is a selector that can be used to target the element(s) that pass the test

## Example

This example will use the `jsincss` plugin to load a JS-in-CSS stylesheet making use of this plugin. To test it in a JavaScript module, import both the `jsincss` package and any helper plugins you want:

```js
<script type=module>
  import jsincss from 'https://unpkg.com/jsincss/index.js'
  import compare from 'https://unpkg.com/jsincss-compare-attribute/index.js'

  jsincss(() => `

    ${compare('[data-price]', 'data-price', num => num > 100, `
      :self {
        background: lime;
      }
    `)}

  `)
</script>
```

It's also possible to write your stylesheets as a separate JavaScript module like this, where you import any helper plugins at the top of the stylesheet:

```js
import compare from 'https://unpkg.com/jsincss-compare-attribute/index.js'

export default () => `

  ${compare('[data-price]', 'data-price', num => num > 100, `
    :self {
      background: lime;
    }
  `)}

`
```

And then import both the `jsincss` plugin and the stylesheet into your code and run them like this, suppling any `selector` or `events` list the `jsincss` plugin might need to apply the stylesheet only the the element(s) and event(s) you require, depending on what you're doing:

```js
import jsincss from 'https://unpkg.com/jsincss/index.js'
import stylesheet from './path/to/stylesheet.js'

jsincss(stylesheet)
```

## Compatible JS-in-CSS Stylesheet Loaders

- [jsincss](https://github.com/tomhodgins/jsincss)