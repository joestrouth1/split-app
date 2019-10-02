Start by cloning [the repository](https://www.github.com/joestrouth1/split-app).

Look inside and you'll see that this project is made up of two parts:

- `c-components`: A component library built in React + Typescript. The
  styleguide you're reading lives in here.
- `idg`: A website built with Gatsby + Typescript.

The site depends on and uses `c-components` as if it were an npm module, via
[Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).

## Installation

You'll need these tools installed:

- [Node.js](https://nodejs.org/en/): tested on v10.x
- [Yarn](https://yarnpkg.com/): npm is not sufficient.

Running `yarn` at the root of the project will install and link the project's
dependencies. This may take a while.

> If this command fails with SSL errors that mention a local issuer certificate,
> it's because your corporate network is acting as a man-in-the-middle. Reach
> out and I can show you how I worked around this.

## Try things out

This project includes scripts for most common tasks, including:

- Starting a dev server that watches for changes
- Building for production/distribution
- Running tests
- Linting your code

You can run them like so:

```bash
# Working directory: /
yarn develop     # start the site's development server
yarn build       # build the site for production

yarn workspace idg develop # start the site, as above
yarn workspace idg build   # build the site, as above
yarn workspace idg serve   # serve the built production site
yarn workspace idg test    # run site tests. try with --watch
yarn workspace idg lint    # lint site code. try with --fix

yarn workspace c-components start    # watch and rebuild components when changed
yarn workspace c-components build    # build components once for production
yarn workspace c-components test     # run component tests. try with --watch
yarn workspace c-components lint     # lint component code. try with --fix

yarn workspace c-components styleguide       # start styleguide dev server
yarn workspace c-components styleguide:build # build styleguide for prod
```

If you navigate into one of the workspaces, the commands are shorter:

```bash
# Working directory: /c-components
yarn start # same as yarn workspace c-components start

# you can still run scripts in neighboring workspaces from here
yarn workspace idg test --watch
```

If you look at the `scripts` key in each `package.json`, you'll see a full list
of commands and exactly what they do. There's a `package.json` at the root of
the project, plus one in each workspace.
