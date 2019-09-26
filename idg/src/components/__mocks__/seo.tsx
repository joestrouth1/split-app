import React from 'react'
interface SEOProps {
  /** Meta description for the page */
  description?: string
  /** Language of page content, <html lang={lang}> */
  lang?: string
  /** Additional meta tags to insert into <head>.
   * @example [{ name: 'some:meta', content: 'cool content' }]
   */
  meta?: object[]
  /** Page title, shown in tab/window */
  title: string
}
export const SEO = () => React.createElement('seo-mock')
