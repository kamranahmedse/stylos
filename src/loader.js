const loaderUtils = require('loader-utils');
const tailor = require('css-tailor');

module.exports = function (source, map) {
  const options = this.options || {};

  const setImportant = !!options.important;
  const emitFileName = 'web-utils-[hash:8].css';

  // Generate the CSS with given options and emit the
  // file with the given name. We will catch the
  // emitted files in the plugin, identify them the prefix
  // `web-utils-` and put them in HEAD or save them in file
  let generatedCss = tailor.generateCss(source, { setImportant }) || {};
  let content = generatedCss.minified || '';

  if (content) {
    const url = loaderUtils.interpolateName(this, emitFileName, { content });
    this.emitFile(url, content);
  }

  this.callback(null, source, map);
};
