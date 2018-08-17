class StylosWebpackPlugin {
  /**
   * Processes HtmlWebpackPlugin's html data
   * adding the CSS utilities to head
   *
   * @param pluginData
   * @param callback
   */
  processUtils(pluginData, callback) {
    let utilsCss = '';

    const originalAssets = this.assets;
    const updatedAssets = {};

    // Read the emitted css utility files, pull
    // the CSS from them and remove them from the
    // assets so that they don't generate CSS files
    for (let assetPath in originalAssets) {
      /* istanbul ignore if */
      if (!originalAssets.hasOwnProperty(assetPath)) {
        continue;
      }

      const asset = originalAssets[assetPath];
      // If it is a utils asset, remove it and keep the CSS
      if (assetPath.startsWith('web-utils-')) {
        utilsCss += asset.source();
      } else {
        updatedAssets[assetPath] = asset;
      }
    }

    this.assets = updatedAssets;

    // Update the HTML by attaching the generated CSS in head
    if (utilsCss) {
      pluginData.head.push({
        tagName: 'style',
        closeTag: true,
        attributes: {
          type: 'text/css'
        },
        innerHTML: utilsCss
      });
    }

    return callback && callback(null, pluginData);
  }

  /**
   * Hooks into the HtmlWebpackPlugin, gets the CSS files
   * emitted from the loader and puts the CSS into HEAD
   *
   * @param compiler
   */
  apply(compiler) {
    if (compiler.hooks) {
      compiler.hooks.compilation.tap('StylosWebpackPlugin', compilation => {
        compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(
          'StylosWebpackPlugin',
          this.processUtils.bind(compilation)
        );
      });
    } else {
      compiler.plugin('compilation', compilation => {
        compilation.plugin('html-webpack-plugin-alter-asset-tags', this.processUtils.bind(compilation));
      });
    }
  }
}

module.exports = StylosWebpackPlugin;
