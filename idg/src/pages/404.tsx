/**@jsx jsx */
import { jsx, Main, Container } from 'theme-ui'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'

const allPagesQuery = graphql`
  query {
    allPages: allSitePage {
      nodes {
        path
      }
    }
  }
`

interface AllPagesQueryResult {
  allPages: {
    nodes: { path: string }[]
  }
}

const NotFoundPage = () => {
  const { allPages }: AllPagesQueryResult = useStaticQuery(allPagesQuery)

  return (
    <Layout>
      <SEO title="404: Not found" />
      <Main>
        <Container
          sx={{ px: 3, py: 4, maxWidth: theme => theme.breakpoints[0] }}
        >
          <h1 sx={{ variant: 'type.title', mb: 3 }}>Page not found</h1>
          <p sx={{ variant: 'type.subtitle', mb: 3 }}>
            Sorry, we couldn&rsquo;t find that page. Why don&rsquo;t you try one
            of these?
          </p>

          <ul>
            {allPages.nodes.map(({ path }) => (
              <li key={path} sx={{ mb: 1 }}>
                <Link to={path} sx={{ variant: 'links.default' }}>
                  {path}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Main>
    </Layout>
  )
}
export default NotFoundPage
