const path = require('path');
const webpack = require('webpack');
const MemoryFs = require('memory-fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UtilsPlugin = require('../src/plugin');


module.exports = function (fixturePath, options = {}) {
  const compiler = webpack({
    context: __dirname,
    entry: fixturePath,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.html/,
          use: 'html-loader'
        },
        {
          test: /\.jsx/,
          use: 'jsx-loader'
        },
        {
          test: /(\.html|\.jsx)/,
          use: {
            loader: path.resolve(__dirname, '../src/loader.js'),
            options
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: options.htmlTemplate || fixturePath,
      }),
      new UtilsPlugin()
    ]
  });

  compiler.outputFileSystem = new MemoryFs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) {
        return reject(stats.compilation.errors[0]);
      }

      resolve({
        stats,
        fs: compiler.outputFileSystem
      });
    });
  });
};
