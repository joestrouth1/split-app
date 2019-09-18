/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/**@jsx jsx */
import { ReactNode } from 'react'
import { jsx, ThemeProvider, Layout, Footer, Styled } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { defaultTheme } from 'c-components'
import { Header } from '../header'
import './layout-base.css'

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

export interface PureDefaultLayoutProps {
  children: ReactNode
  data: AllPagesQueryResult
}

export const PureDefaultLayout = ({
  children,
  data,
}: PureDefaultLayoutProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Styled.root>
        <Layout sx={{ bg: 'grays.0' }}>
          <Header>
            <ul
              sx={{
                m: 0,
                p: 3,
                listStyle: 'none',
                bg: 'white',
                display: 'flex',
                flexFlow: 'column nowrap',
                alignItems: 'center',
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
          </Header>
          {children}
          <Footer
            sx={{
              variant: 'type.disclaimer',
              bg: 'grays.2',
              display: 'flex',
              flexFlow: 'column nowrap',
              textAlign: 'center',
              p: 3,
              color: 'greens.7',
            }}
          >
            © {new Date().getFullYear()}
          </Footer>
        </Layout>
      </Styled.root>
    </ThemeProvider>
  )
}

type DefaultLayoutProps = Omit<PureDefaultLayoutProps, 'data'>

export const DefaultLayout = (props: DefaultLayoutProps) => {
  const data: AllPagesQueryResult = useStaticQuery(allPagesQuery)

  return <PureDefaultLayout {...props} data={data} />
}
