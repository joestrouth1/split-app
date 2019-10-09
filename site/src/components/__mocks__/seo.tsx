import React from 'react'
// TODO:
// [x] separate SEO into pure/non-pure components
// [x] requireActual PureSEO and pass static data
// [ ] verify tests work
// Make sure jest.mock is called in jest.setup, like for Illustration
const { PureSEO } = jest.requireActual('../seo')
const baseProps = {
  description: 'A nice description of a nice page.',
  siteTitle: 'Nice application',
  author: 'Joe Strouth',
}
export const SEO = ({ title, ...props }: import('../seo').SEOProps) => {
  const defaultProps = { ...baseProps, ...props, pageTitle: title }
  return <PureSEO {...defaultProps} />
}
