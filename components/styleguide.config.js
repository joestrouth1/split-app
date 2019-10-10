const path = require('path')
const { version } = require('./package')
const { getDefaultExportForFile } = require('react-docgen-typescript')
const styleguideTheme = require('./styleguide.theme')

module.exports = {
  // ribbon: {
  //   url: 'https://github.com/joestrouth1/split-app',
  // },
  title: 'App Components',
  theme: styleguideTheme,
  template: {
    favicon: 'https://demo.application.joes.house/icons/icon-96x96.png',
  },
  defaultExample: false,
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.(js|ts)x?$/, '.examples.md')
  },
  pagePerSection: true,
  sections: [
    {
      name: 'Getting started',
      content: 'docs/getting-started.md',
      exampleMode: 'expand',
    },
    {
      name: 'Technologies used',
      content: 'docs/tech.md',
      exampleMode: 'expand',
    },
    {
      name: 'UI Components',
      content: 'docs/components.md',
      components: 'src/**/*.tsx',
      ignore: [
        '**/__tests__/**',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/*.spec.{js,jsx,ts,tsx}',
        '**/*.d.ts',
        'src/pages/**/*.tsx',
        'src/test-utils.tsx',
        '**/styleguide/Wrapper.tsx',
        '**/styleguide/ColorPalettes.tsx',
      ],
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'Design',
      content: 'docs/design/index.md',
      sections: [
        {
          name: 'Spacing',
          content: 'docs/design/spacing.md',
        },
        {
          name: 'Typography',
          content: 'docs/design/typography.md',
        },
        {
          name: 'Colors',
          content: 'docs/design/colors.md',
        },
      ],
      sectionDepth: 1,
    },
  ],
  moduleAliases: {
    components: path.resolve(__dirname, 'src'),
    styleguide: path.resolve(__dirname, 'src', 'styleguide'),
  },
  version,
  styles: {
    Heading: {
      heading1: {
        marginTop: 16,
        marginBottom: 24,
      },
      heading2: {
        marginTop: 24,
        marginBottom: 16,
      },
      heading3: {
        marginTop: 24,
        marginBottom: 16,
      },
    },
    StyleGuide: {
      footer: {
        display: 'none',
      },
    },
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            // 'postcss-loader',
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name][md5:hash:base64:8].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', 'jsx', '.ts', '.tsx', '.json'],
    },
  },
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    {
      propFilter: props => {
        if (props.parent) {
          return !props.parent.fileName.includes('node_modules')
        }
        return true
      },
      shouldExtractLiteralValuesFromEnum: true,
      componentNameResolver: (exp, source) => {
        const name = exp.getName()
        if (name === 'ForwardRefExoticComponent') {
          return getDefaultExportForFile(source)
        }
        return name
      },
    }
  ).parse,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
  context: {
    jsx: 'theme-ui/src/jsx',
  },
  compilerConfig: {
    // Don't include an Object.assign ponyfill, we have our own
    objectAssign: 'Object.assign',
    // Transpile only features needed for IE11
    target: { ie: 11 },
    transforms: {
      // Don't throw on ESM imports, we transpile them ourselves
      modules: false,
      // Enable tagged template literals for styled-components
      dangerousTaggedTemplateString: true,
      // to make async/await work by default (no transformation)
      asyncAwait: false,
    },
    // use theme-ui's jsx function, added to context above
    jsx: 'jsx',
  },
}
