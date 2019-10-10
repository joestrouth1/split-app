/**@jsx jsx */
/* istanbul ignore file: For demo only, won't be in final site */
import { jsx, Container, Main } from 'theme-ui'
import { Link, graphql, useStaticQuery } from 'gatsby'
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

export interface PureIndexPageProps {
  data: AllPagesQueryResult
}

export const PureIndexPage = ({ data }: PureIndexPageProps) => {
  data.allPages.nodes = data.allPages.nodes.filter(
    ({ path }) => !path.includes('404')
  )
  return (
    <Layout>
      <SEO title="Table of Contents" />
      <Main>
        <Container
          sx={{
            px: 3,
            pt: 3,
            pb: 4,
            maxWidth: theme => theme.breakpoints[0],
            display: 'flex',
            flexFlow: 'column nowrap',
          }}
        >
          <h1 sx={{ variant: 'type.title', mb: 4 }}>Welcome to the new app!</h1>

          <Link
            to="/basic-information"
            sx={{ variant: 'buttons.primary', mb: 4 }}
          >
            Start pre-qual flow
          </Link>

          <p sx={{ variant: 'type.body' }}>Or jump to a specific page:</p>
          <ul
            sx={{
              m: 0,
              p: 3,
              listStyle: 'none',
              display: 'flex',
              flexFlow: 'column nowrap',
              alignItems: 'flex-start',
              '& > * + *': {
                mt: 2,
              },
            }}
          >
            {data.allPages.nodes.map(({ path }) => {
              return (
                <li key={path}>
                  <Link
                    to={path}
                    sx={{ variant: 'links.default' }}
                    activeClassName="active"
                  >
                    {path}
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </Main>
    </Layout>
  )
}

const IndexPage = () => {
  const data = useStaticQuery(allPagesQuery)

  return <PureIndexPage data={data} />
}

export default IndexPage
