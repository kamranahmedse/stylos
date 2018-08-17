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

## What is it?
Inspired by [bootstrap's utility classes](https://getbootstrap.com/docs/4.1/utilities/sizing/), stylos is a Webpack plugin that automatically generates and injects CSS utilities into your application. All you have to do is specify utility classes on DOM elements; webpack will identify and generate the properties with relevant values and inject them to your application. 

![](https://i.imgur.com/cF2pssW.png)

As you can see, all you have to do is specify the classes having shorthand for the CSS property key, required value and optionally the unit. Stylos will understand it and generate the CSS for you. 

## Features

- Supports HTML as well as JSX
- Works well in vanilla JavaScript apps as well as frameworks e.g. Angular, React or Vue.js
- Plays nicely with `webpack-dev-server` / `webpack serve`
- Integrates with [html-webpack-plugin](https://npmjs.com/package/html-webpack-plugin)
- Helps you make those little UI changes without any accidental broken UI 

## Supported Shorthands 

Here is the the list of known shorthand formulas that you can use in your DOM classes.

| Shorthand | CSS Property     | Example Usage                                    |
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

For the units, you can specify them after the value and relevant CSS unit will be used

- Units including `px, pt, em, p, vh, vw, vmin, ex, cm, in, mm, pc` will translate to the same unit in CSS
- If you don't provide any unit `px` will be used
- If you need `%` specify it as `p` e.g. `w50p` will get translated to `width: 50%`
- If no unit is needed, specify `n` e.g. `fw600n` will translate to `font-weight: 600`

## Installation

First, install Stylos as a development dependency:

```bash
npm i -D stylos
```

Then, import Stylos into your Webpack configuration and add it to your list of plugins:

```javascript
// webpack.config.js
const Stylos = require('stylos');

module.exports = {
  // ...
  rules: [
    // ...
    // Add the rule to use the loader for HTML or JSX files
    {
      test: /(\.js|\.jsx|\.html)$/,
      exclude: /node_modules/,
      use: Stylos.Loader
    }
  ],
  plugins: [
    // ...
    // new HtmlWebpackPlugin(..),  // <-- You must have it installed and set up
    // Add the plugin right after the HTMLWebpackPlugin
    new Stylos.Plugin()
  ]
}
```

## Contributions

- Open pull request with improvements
- Report any bugs
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback [![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/kamranahmedse.svg?style=social&label=Follow%20%40kamranahmedse)](https://twitter.com/kamranahmedse)

## License

MIT &copy; [Kamran Ahmed](https://twitter.com/kamranahmedse)
