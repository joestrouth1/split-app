import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import Layout from '../components/layouts'
import SEO from '../components/seo'
import Link from '../components/link'

const Image = props => {
  const { cathedral } = useStaticQuery(graphql`
    query {
      cathedral: file(relativePath: { eq: "cathedral.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <GatsbyImage fluid={cathedral.childImageSharp.fluid} {...props} />
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container mx-auto px-4 md:px-8">
      <h1 className="text-4xl leading-tight tracking-tight mt-8 mb-4">
        Hi people
      </h1>
      <p className="leading-normal mb-4">Welcome to a new Gatsby site.</p>
      <p className="leading-normal mb-4">Now go build something great.</p>
      <Image className="mb-8" />
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/page-2">Go to page 2</Link>
      <Link to="/page-3/">Go to page 2</Link>
      <Link to="/page-3">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
