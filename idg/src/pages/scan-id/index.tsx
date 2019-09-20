/**@jsx jsx */
import { jsx, Container, Main, Flex } from 'theme-ui'
import { Link } from 'gatsby'
import { Icon } from 'c-components'
import { SEO } from '../../components/seo'
import { DefaultLayout as Layout } from '../../components/layouts'

const ScanIdPage = () => {
  return (
    <Layout>
      <SEO title="Scan your ID" />
      <Main>
        <Container
          sx={{ px: 3, py: 4, maxWidth: theme => theme.breakpoints[0] }}
        >
          <header>
            <h1 sx={{ variant: 'type.title', mb: 3 }}>Scan your ID</h1>
            <p sx={{ variant: 'type.subtitle', mb: 3 }}>
              We’ll use your card to fill out some of the application and to
              protect against fraud.
            </p>
          </header>

          <p sx={{ variant: 'type.body', mb: 3 }}>
            What type of ID do you have?
          </p>

          <div>
            <Flex
              sx={{
                flexFlow: 'row wrap',
                m: -1,
              }}
            >
              <Link
                to="/scan-id/photos"
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
                <Icon name="car" alt="" fill="primary" />
                <span>Driver’s License</span>
              </Link>

              <Link
                to="/scan-id/photos"
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
                <Icon name="id" alt="" fill="primary" />
                <span>State ID</span>
              </Link>

              <Link
                to="/scan-id/photos"
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
                <Icon name="passport" alt="" fill="primary" />
                <span>Passport</span>
              </Link>
            </Flex>
          </div>

          <p sx={{ variant: 'type.body', mt: 3 }}>
            <Link
              to="/residential-information"
              sx={{ variant: 'links.default' }}
            >
              Enter your information manually.
            </Link>
          </p>
        </Container>
      </Main>
    </Layout>
  )
}

export default ScanIdPage
