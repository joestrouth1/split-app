/**@jsx jsx */
import { jsx } from 'theme-ui'
import { HelmetProvider } from 'react-helmet-async'
import { RoutingContext, useRoutingState } from './src/contexts/routing'
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const helmetContext = {}

const Providers = ({ children }) => {
  const routingState = useRoutingState()
  return (
    <HelmetProvider context={helmetContext}>
      <RoutingContext.Provider value={routingState}>
        {children}
      </RoutingContext.Provider>
    </HelmetProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>
}

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  const { helmet } = helmetContext

  if (helmet == null) {
    return
  }

  setHeadComponents([
    helmet.base.toComponent(),
    helmet.title.toComponent(),
    helmet.meta.toComponent(),
    helmet.link.toComponent(),
    helmet.style.toComponent(),
    helmet.script.toComponent(),
    helmet.noscript.toComponent(),
  ])

  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setBodyAttributes(helmet.bodyAttributes.toComponent())
}
