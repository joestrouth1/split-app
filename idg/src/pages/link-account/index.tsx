/**@jsx jsx */
import { jsx, Container, Main, Flex } from 'theme-ui'
import { Link } from 'gatsby'
import { Icon } from 'c-components'
import { DefaultLayout as Layout } from '../../components/layouts'
import { SEO } from '../../components/seo'

/**
 * Where applicants give us their bank acct. info
 */
const LinkAccountPage = () => {
  return (
    <Layout>
      <SEO title="Link your bank account" />
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
          <header>
            <h1 sx={{ variant: 'type.title', mb: 3 }}>
              Link your bank account
            </h1>
            <p sx={{ variant: 'type.subtitle', mb: 3 }}>
              Accepting a loan = $$ straight to your bank!
            </p>
          </header>

          <p
            sx={{
              variant: 'type.body',
              mb: 3,
            }}
          >
            Simply sign in with your online banking credentials (fastest option)
            or enter your routing and account numbers manually.
          </p>

          <div>
            <Flex
              sx={{
                flexFlow: 'row wrap',
                m: -1,
                textAlign: 'center',
              }}
            >
              <Link
                to="/link-account/decision-logic"
                sx={{
                  variant: 'cards.radio',
                  flexBasis: '100%',
                  display: 'flex',
                  flexFlow: 'column nowrap',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'grays.9',
                  m: 1,
                }}
              >
                <Icon name="link" alt="" fill="primary" />
                <span sx={{ variant: 'type.subtitle' }}>Link account</span>
                <span>(recommended)</span>
              </Link>

              <Link
                to="/link-account/scan-check"
                sx={{
                  variant: 'cards.radio',
                  display: 'flex',
                  flex: 1,
                  flexFlow: 'column nowrap',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'grays.9',
                  m: 1,
                }}
              >
                <Icon name="camera" alt="" fill="primary" />
                <span>Scan a check</span>
              </Link>

              <Link
                to="/link-account/enter-details"
                sx={{
                  variant: 'cards.radio',
                  display: 'flex',
                  flex: 1,
                  flexFlow: 'column nowrap',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'grays.9',
                  m: 1,
                }}
              >
                <Icon name="keyboard" alt="" fill="primary" />
                <span>Enter details</span>
              </Link>
            </Flex>
          </div>
        </Container>
      </Main>
    </Layout>
  )
}

export default LinkAccountPage
