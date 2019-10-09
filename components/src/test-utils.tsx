/**@jsx jsx */
import { render, RenderOptions } from '@testing-library/react'
import { jsx, ThemeProvider } from 'theme-ui'
import { ReactNode, ReactElement } from 'react'
import { defaultTheme } from './theme'

const Wrapped = (props: { children?: ReactNode }) => {
  return <ThemeProvider theme={defaultTheme} {...props} />
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Wrapped, ...options })

export * from '@testing-library/react'

export { customRender as render }
