/**@jsx jsx */
import { jsx } from 'theme-ui'
import { HelmetProvider } from 'react-helmet-async'
import { RoutingContext, useRoutingState } from './src/contexts/routing'

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}

const Providers = ({ children }) => {
  const routingState = useRoutingState()
  return (
    <HelmetProvider>
      <RoutingContext.Provider value={routingState}>
        {children}
      </RoutingContext.Provider>
    </HelmetProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>
}
