/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/**@jsx jsx */
import { ReactNode } from 'react'
import { jsx, ThemeProvider, Layout, Footer, Styled } from 'theme-ui'
import { Header, defaultTheme } from 'c-components'
import './layout-base.css'

interface DefaultLayoutProps {
  children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Styled.root>
        <Layout>
          <Header />
          {children}
          <Footer
            sx={{
              bg: 'grays.2',
              display: 'flex',
              flexFlow: 'column nowrap',
              textAlign: 'center',
              p: 3,
              variant: 'type.disclaimer',
            }}
          >
            © {new Date().getFullYear()}
          </Footer>
        </Layout>
      </Styled.root>
    </ThemeProvider>
  )
}
