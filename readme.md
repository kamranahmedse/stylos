<h1 align="center">
	<img height="150" src="https://raw.github.com/kamranahmedse/stylos/master/logo.svg?sanitize=true" alt="Stylos - Generate and inject CSS utilities to your application" />
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

<p align="center">Webpack plugin that automatically generates and injects CSS utilities to your application.</p>

Inspired by [bootstrap's utility classes](https://getbootstrap.com/docs/4.1/utilities/sizing/), stylos is a Webpack plugin that automatically generates and injects CSS utilities into your application. All you have to do is specify utility classes on DOM elements; webpack will identify and generate the properties with relevant values and inject them to your application. 

For example, notice the below HTML having some utility classes i.e. `mb20`, `p15` and `fw600`  

```html
<a href="/" class="logo p15">Stylos</a>

<div class="jumbotron">
  <h1 class="title mb10">Item Specific Utilities</h1>
  <p class="fw600">Forget about accidentally disturbing some other CSS</p>
</div>
```
It will result in automatic generation and injection of below CSS into your application

```css
.p15 { padding: 15px; }
.mb10 { margin-bottom: 10px; }
.fw600 { font-weight: 600; }
```

## Available Options

There is a variety of options available. Here is the the list of known property formulas

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

As you can see the format used by the class names is sa follows

```bash
[formula][value][unit] # If you donot provide the unit, `px` will be used.
```

## How to use?

Install the plugin using npm or yarn

```bash
npm install stylos --save-dev
yarn add stylos --dev
```
Add the loader to `module.rules` in your webpack configuration
```javascript
const Stylos = require('stylos');

// ...
module: {
  // Add the loader in the loader's list
  // it can handle HTML as well as JSX files
  rules: [
    // ...
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: Stylos.Loader
    }
  ]
},
// ...
plugins: [
  // Add the plugin right after html-webpack-plugin
  // new HtmlWebpackPlugin(..),  // <-- You must have it installed and set up
  new Stylos.Plugin(),
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
