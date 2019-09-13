/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment, ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../header'
import { Header as LibHeader } from "c-components";
import './DefaultLayout.css'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <LibHeader />
      <div>
        <main>{children}</main>
        <footer>
          <div className="mt-8 px-4 md:px-8 py-12 bg-orange-900 text-blue-100 font-serif">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </footer>
      </div>
    </Fragment>
  )
}

export default DefaultLayout
