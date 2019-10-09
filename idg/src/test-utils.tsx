/**@jsx jsx */
import { render, RenderOptions } from '@testing-library/react'
import { jsx, ThemeProvider } from 'theme-ui'
import { ReactNode, ReactElement } from 'react'
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router'
import { defaultTheme } from 'c-components'

const Wrapped = (props: { children?: ReactNode }) => {
  return <ThemeProvider theme={defaultTheme} {...props} />
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Wrapped, ...options })

function renderWithRouter(
  ui: ReactElement,
  { route = '/', history = createHistory(createMemorySource(route)) }
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    history,
  }
}

export * from '@testing-library/react'

export { customRender as render, renderWithRouter }
