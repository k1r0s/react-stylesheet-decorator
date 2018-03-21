DEPRECATED :fire:

https://github.com/k1r0s/preact-stylesheet-decorator provides support for React as well.

---

This decorator allows to easily style React components through adding a scoped stylesheet inside that component and defined styles only get applied to it and its descendants.

Basically it allows to style in Reactjs like Angular or [Vue does by adding a scoped stylesheet](https://vue-loader.vuejs.org/en/features/scoped-css.html)

### Capabilities

This decorator supports all CSS capabilities defined here: https://www.npmjs.com/package/scope-css

### Getting started

## Bower
just kidding! XD

## NPM
install `npm install react-stylesheet-decorator --save`

usage:

- first import

```javascript
import { stylesheet } from "react-stylesheet-decorator"
```

- then define a string with raw CSS content

```javascript
const style = `
  span { font-size: 20px }
`
```
- Plug it on render fn of some React component

```javascript

@stylesheet(style)
render() {
  return <span>something</span>
}

```

## Using Preact

This package is based on Preact package *which has the same API* but you have to use another package.
Please refer to here if you're using Preact https://www.npmjs.com/package/stylesheet-decorator

## That's all Folks!

Thanks to @_developit for its support <3.

This development is related on this conversation [Twitter Link](https://twitter.com/k1r0s/status/919271946109554694) and this issue [GH preact issue](https://github.com/developit/preact/issues/909#issuecomment-336656084)
