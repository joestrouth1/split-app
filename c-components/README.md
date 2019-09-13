# User Guide

> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)

## Commands

The recommended workflow is to run start in one terminal:

```
yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the styleguide inside another:

```
yarn styleguide
```

To do a one-off build, use `yarn build` (for components) or `yarn styleguide:build` for the styleguide.

To run tests, use `yarn test`.

## Configuration

Code quality is [set up for you](https://github.com/palmerhq/tsdx/pull/45/files) with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `yarn test`. This runs the test watcher (Jest) in an interactive mode. By default, runs tests related to files changed since the last commit.

#### Folder Structure

This is the folder structure we set up for you:

```
/src
  index.ts                      # Exports components to publish
  /<ComponentName>
    <ComponentName>.examples.md # Styleguide examples and documentation
    <ComponentName>.test.tsx    # Unit tests with Jest & @testing-library/react
    <ComponentName>.tsx         # Component definition
    index.ts                    # Exports
  /styleguide                   # Components used only in the styleguide
    Wrapper.tsx                 # Wraps each usage example (for context/theme)
  /theme                        # Default component theme for use with theme-ui
/docs                           # Docs for styleguide not tied to one component
/test                           # Jest setup files and mocks
.gitignore
package.json
README.md
styleguide.config.js            # For configuring the styleguide
styleguide.theme.js             # Maps the component theme to the styleguide
tsconfig.json
tsdx.config.js                  # Configures rollup & TSDX
```

### Rollup

TSDX uses [Rollup v1.x](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean

// inside your code...
if (__DEV__) {
  console.log('foo')
}
```

You can also install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.
