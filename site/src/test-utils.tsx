/**@jsx jsx */
import { render, RenderOptions } from '@testing-library/react'
import { jsx, ThemeProvider } from 'theme-ui'
import { ReactNode, ReactElement } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { RoutingContext, useRoutingState } from './contexts/routing'
import { defaultTheme } from 'components'

// eslint-disable-next-line
//@ts-ignore
HelmetProvider.canUseDOM = false

const Wrapped = ({ children }: { children?: ReactNode }) => {
  const helmetContext = {}
  const routingState = useRoutingState()
  return (
    <ThemeProvider theme={defaultTheme}>
      <HelmetProvider context={helmetContext}>
        <RoutingContext.Provider value={routingState}>
          {children}
        </RoutingContext.Provider>
      </HelmetProvider>
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Wrapped, ...options })

export * from '@testing-library/react'

export { customRender as render }
