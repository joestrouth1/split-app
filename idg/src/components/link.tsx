import React from 'react'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'

const internalPageQuery = graphql`
  query Pages {
    allSitePage {
      nodes {
        path
      }
    }
  }
`

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link: React.FC<{
  to: string
  activeClassName?: string
  partiallyActive?: boolean
  [x: string]: any
}> = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  const { allSitePage } = useStaticQuery(internalPageQuery)
  const paths: Array<string | undefined> = allSitePage.nodes.map(
    node => node.path
  )

  const internal = paths.includes(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

export default Link
