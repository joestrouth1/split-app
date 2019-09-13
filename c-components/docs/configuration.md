Wrap them in a `ThemeProvider` from `theme-ui`.

You'll need a `theme` object, which can be imported from this package or written separately.

```jsx
import { ThemeProvider } from 'theme-ui'
import { Header } from 'c-components'
import { defaultTheme } from 'c-components/theme'
;<ThemeProvider theme={defaultTheme}>
  <Header linkText="Click me" />
</ThemeProvider>
```
