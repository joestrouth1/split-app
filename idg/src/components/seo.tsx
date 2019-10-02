import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export interface SEOProps {
  /**
   * Meta description for the page
   * @default `siteMetadata.description`
   */
  description?: string
  /**
   * Language of page content, <html lang={lang}>
   * @default en
   */
  lang?: string
  /** Additional meta tags to insert into <head>.
   * @example [{ name: 'some:meta', content: 'cool content' }]
   */
  meta?: object[]
  /**
   * Page title, shown in tab/window
   * @default `siteMetadata.title`
   */
  title: string
  /**
   * Creator of the page
   * @default `siteMetadata.author`
   */
  author?: string
}

interface SiteQuery {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}
const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

/**
 * Renders site/page metadata to the page head.
 */
export function SEO({
  author,
  description,
  lang = 'en',
  meta = [],
  title,
}: SEOProps) {
  const { site } = useStaticQuery<SiteQuery>(siteQuery)

  const data = {
    author: author || site.siteMetadata.author,
    description: description || site.siteMetadata.description,
    lang,
    meta,
    pageTitle: title,
    siteTitle: site.siteMetadata.title,
  }

  return <PureSEO {...data} />
}

type PureSEOProps = Omit<SEOProps, 'title'> & {
  pageTitle?: string
  siteTitle: string
}
export function PureSEO(props: PureSEOProps) {
  const { lang, siteTitle, pageTitle, description, author, meta = [] } = props

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        ...meta,
      ]}
    />
  )
}
