This project uses modern tools for the following purposes:

- Assuring code quality
- Building HTML, CSS, and JavaScript files
- Defining user interfaces
- Documentation

The primary tools used for each purpose are listed below.

## Code quality

This project strives for readable, maintainable code that you can use with confidence.

### Testing

[Jest](https://jestjs.io) runs the unit and integration tests. It's a
quick and versatile test runner built by Facebook.

[`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro) provides additional test utilities. The guiding principle of the library
bears repeating here:

> The more your tests resemble the way your software is used, the more confidence they can give you.

### Linting and formatting

[ESLint](https://eslint.org) scans the code and warns you if it detects mistakes or anti-patterns.
These could be accessibility issues, unreachable/useless code, common errors, or stylistic inconsistencies.
It will fix many of these issues for you, automatically.

ESLint will run before each `git commit` on any files you have staged. You can also run it manually with `yarn lint` or `yarn lint --fix`.

## Build tooling

### Typescript

[Typescript](https://www.typescriptlang.org/) is JavaScript, but with types. It can help prevent runtime errors
by type-checking your code at build time. It also gives great autocomplete/Intellisense while developing.

### Bundlers

Bundlers like [Rollup](https://rollupjs.org) and [webpack](https://webpack.js.org/) load, transform, generate, and package code for distribution.

This includes things like code minification, code splitting, tree shaking, etc.

In practice you won't need to touch these often, if at all.

### Babel

[Babel](https://babeljs.io) is a transpiler, which turns JavaScript into different JavaScript. It lets you use the latest language features without worrying about browser compatibility, among other things.

### Gatsby

[Gatsby](https://gatsbyjs.org) generates optimized websites from React components. It includes many performance optimizations
out of the box and is highly configurable through a rich ecosystem of plugins.

Some of the functionality enabled by plugins:

- Offline capability
- Automatic canonical URLs
- Google tag manager integration with client-side router
- Elimination of unused CSS
- Sitemap generation
- Image optimization
- Generation of Progressive Web App icons and manifest

## UI

[React](https://reactjs.org) gives a component-driven, declarative way of building user interfaces.

[Emotion](https://emotion.sh/docs/introduction) lets you style React components without
worrying about naming conflicts, specificity wars, or bloated append-only stylesheets.

[theme-ui](https://theme-ui.com) wraps Emotion and helps you create more consistent UIs. Select from a pre-defined set of acceptable values, defined in the brand theme. These are used from design through development to make decisions quick, easy, and coherent.

## Documentation

[React Styleguidist](https://react-styleguidist.js.org) is what powers this webpage.
It uses code comments and TypeScript's static analysis to generate documentation. Additional docs and usage examples live in markdown files beside the components.
