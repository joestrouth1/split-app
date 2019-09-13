/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment, ReactNode } from 'react'
import { ThemeProvider, Layout, Footer, Styled } from 'theme-ui'
import 'typeface-open-sans'
import { Header, defaultTheme } from 'c-components'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Styled.root>
        <Layout>
          <Header />
          <div>
            <main>{children}</main>
            <Footer>
              <div className="">
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </div>
            </Footer>
          </div>
        </Layout>
      </Styled.root>
    </ThemeProvider>
  )
}

export default DefaultLayout
