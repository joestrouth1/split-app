/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/**@jsx jsx */
import { ReactNode, useReducer } from 'react'
import { jsx, ThemeProvider, Layout, Footer, Styled } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { defaultTheme } from 'c-components'
import { Header } from '../header'
import './layout-base.css'
import {
  ModalContext,
  modalReducer,
  initialModalState,
} from '../../contexts/modal'

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

const ModalTestComponent = () => (
  <ModalContext.Consumer>
    {dispatchModalAction => (
      <button onClick={() => dispatchModalAction({ type: 'TOGGLE' })}>
        Toggle Modal
      </button>
    )}
  </ModalContext.Consumer>
)

export const PureDefaultLayout = ({
  children,
  data,
}: PureDefaultLayoutProps) => {
  const [modalState, modalDispatch] = useReducer(
    modalReducer,
    initialModalState
  )

  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalContext.Provider value={modalDispatch}>
        <Styled.root>
          <Layout sx={{ bg: 'grays.0' }}>
            {modalState.isOpen && <div>I am a modal.</div>}
            <ModalTestComponent />
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
      </ModalContext.Provider>
    </ThemeProvider>
  )
}

type DefaultLayoutProps = Omit<PureDefaultLayoutProps, 'data'>

export const DefaultLayout = (props: DefaultLayoutProps) => {
  const data: AllPagesQueryResult = useStaticQuery(allPagesQuery)

  return <PureDefaultLayout {...props} data={data} />
}
