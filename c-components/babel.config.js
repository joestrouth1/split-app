const styleguideConfig = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'usage',
        // corejs: 3,
        corejs: 2,
      },
    ],
    ['@babel/preset-react'],
    ['@babel/preset-typescript'],
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
}

module.exports = process.env.BABEL_ENV === 'styleguide' ? styleguideConfig : {}
