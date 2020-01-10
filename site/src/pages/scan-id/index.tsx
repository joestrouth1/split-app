/**@jsx jsx */
import { jsx, Container, Main, Flex } from 'theme-ui'
import { Link } from 'gatsby'
import { Icon, Button } from 'components'
import { SEO } from '../../components/seo'
import { DefaultLayout as Layout } from '../../components/layouts'
import { useState } from 'react'

const ScanIdPage = () => {
  const [showHelp, setShowHelp] = useState(false)

  return (
    <Layout>
      <SEO title="Scan your ID" />
      <Main>
        <Container
          sx={{
            px: 3,
            pt: 3,
            pb: 4,
            maxWidth: theme => theme.breakpoints[0],
          }}
        >
          <header>
            <h1 sx={{ variant: 'type.title', mb: 3 }}>Scan your ID</h1>
            <p sx={{ variant: 'type.subtitle', mb: 3 }}>
              We’ll use your ID to fill out some of the application and to
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
          <Flex
            sx={{
              flexFlow: 'row nowrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
              mt: 3,
            }}
          >
            <Link
              to="/residential-information"
              sx={{ variant: 'links.default' }}
            >
              Enter your information manually.
            </Link>
            <Button
              variant="link"
              sx={{ display: 'inline-flex' }}
              onClick={() => setShowHelp(!showHelp)}
            >
              <Icon
                name="question"
                alt="Why would I enter my information manually?"
                width={24}
                height={24}
                sx={{ m: 0, p: 0 }}
              ></Icon>
            </Button>
          </Flex>

          {/* Help container */}
          <div aria-live="polite">
            {showHelp && (
              <p sx={{ variant: 'type.body', mt: 3 }}>
                Don&rsquo;t have your ID handy or don&rsquo;t see your ID type
                listed? Click the link above to see more ID types and enter your
                information manually.
              </p>
            )}
          </div>
        </Container>
      </Main>
    </Layout>
  )
}

export default ScanIdPage
