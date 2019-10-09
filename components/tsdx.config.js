const postcss = require('rollup-plugin-postcss')
const postcssConfig = require('./postcss.config')

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        ...postcssConfig,
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    )
    return config
  },
}
