/**@jsx jsx */
import { jsx } from 'theme-ui'
import { HelmetProvider } from 'react-helmet-async'

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
  return <HelmetProvider>{children}</HelmetProvider>
}

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>
}
