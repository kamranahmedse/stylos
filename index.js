const path = require('path');
const utilsPlugin = require('./src/plugin');

module.exports = {
  Loader: path.join(__dirname, './src/loader'),
  Plugin: utilsPlugin
};
