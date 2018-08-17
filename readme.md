<h1 align="center">
	<img height="150" src="https://cdn.rawgit.com/kamranahmedse/stylos/master/logo.svg" alt="Stylos - Generate and inject CSS utilities to your application" />
	<br> Stylos
</h1>
<p align="center">
	<a href="https://travis-ci.org/kamranahmedse/stylos">
		<img src="https://img.shields.io/travis/kamranahmedse/stylos/master.svg?style=flat-square" alt="Build Status">
	</a>
	<a href="https://github.com/kamranahmedse/stylos">
		<img src="https://img.shields.io/codecov/c/github/kamranahmedse/stylos.svg?style=flat-square" alt="Codecov">
	</a>
	<a href="#">
		<img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="Software License">
	</a>
</p>

<p align="center">Webpack plugin to generate and inject CSS utilities to your application.</p>

## How does it work?
All you have to do is specify utility classes on any DOM elements and webpack will generate and inject the CSS into your app. 

For example, if you want to add bottom margin of `20px` to a link, you can do that

```html
<a href="/" class="logo mb20">I have bottom margin</a>
<p>Here is some text having some <span class="fw600">important bold information</span> in it.</p>
```  

Currently supported formuals are listed below.

| Formula | CSS Property     | Example Usage                                    |
|---------|------------------|--------------------------------------------------|
| `p`     | `padding`        | `p10` will translate to `padding: 10px`          |
| `pt`    | `padding-top`    | `pt20` will translate to `padding-top: 20px;`    |
| `pb`    | `padding-bottom` | `pb10` will translate to `padding-bottom: 10px;` |
| `pr`    | `padding-right`  | `pr20` will translate to `padding-right: 20px;`  |
| `pl`    | `padding-left`   | `pl23` will translate to `padding-left: 23px;`   |
| `m`     | `margin`         | `m20` will translate to `margin: 20px`           |
| `mt`    | `margin-top`     | `mt20` will translate to `margin-top: 20px;`     |
| `mb`    | `margin-bottom`  | `mb20` will translate to `margin-bottom: 20px;`  |
| `ml`    | `margin-left`    | `ml50` will translate to `margin-left: 50px;`    |
| `mr`    | `margin-right`   | `mr30` will translate to `margin-right: 30px;`   |
| `w`     | `width`          | `w200` will translate to `width: 200px`          |
| `h`     | `height`         | `h60` will translate to `height: 60px;`          |
| `br`    | `border-radius`  | `br5` will translate to `border-radius: 5px;`    |
| `fs`    | `font-size`      | `fs15` will translate to `font-size: 15px`       |
| `fw`    | `font-weight`    | `fw400` will translate to `font-weight: 400px`   |
| `lh`    | `line-height`    | `lh20em` will translate to `line-height: 20em`   |
| `t`     | `top`            | `t6` will translate to `top: 6px;`               |
| `l`     | `left`           | `l30` will translate to `left: 30px`             |
| `b`     | `bottom`         | `b20em` will translate to `bottom: 20em;`        |
| `r`     | `right`          | `r20em` will translate to `right: 20em;`         |

## How to use?

Install the plugin using npm or yarn

```bash
npm install webpack-css-utils --save-dev
yarn add webpack-css-utils --dev
```
Add the loader to `module.rules` in your webpack configuration
```javascript
const CssUtils = require('webpack-css-utils');

// ...
module: {
  // Add the loader in the loader's list
  // it can handle HTML as well as JSX files
  rules: [
    // ...
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: CssUtils.Loader
    }
  ]
},
// ...
plugins: [
  // Add the plugin right after html-webpack-plugin
  // new HtmlWebpackPlugin(..),  // <-- You must have it installed and set up
  new CssUtils.Plugin(),
]
// ...
```

## Notes for Units

All the default CSS units are supported. You can specify it and relevant CSS unit will be used

- Units including `px, pt, em, p, vh, vw, vmin, ex, cm, in, mm, pc` will translate to the same unit in CSS
- If you don't provide any unit `px` will be used
- If you need `%` specify it as `p` e.g. `w50p` will get translated to `width: 50%`
- If no unit is needed, specify `n` e.g. `fw600n` will translate to `font-weight: 600`

## License
MIT &copy; [Kamran Ahmed](http://kamranahmed.info)
