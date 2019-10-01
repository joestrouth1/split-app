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
// TODO: separate SEO into pure/non-pure components, requireActual PureSEO and pass static data
// Make sure jest.mock is called in jest.setup, like for Illustration
export const SEO = () => React.createElement('seo-mock')
