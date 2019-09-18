/**@jsx jsx */
import { jsx, Flex, Container, Main } from 'theme-ui'
import { Button, TextField, Icon } from 'c-components'
import Link from '../components/link'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
import { ModalContext } from '../contexts/modal'

const PrivacyPolicyModal = () => (
  <div
    sx={{
      bg: 'grays.1',
      maxHeight: '100%',
      px: 3,
      py: 4,
    }}
  >
    <article>
      <h1 sx={{ variant: 'type.title', flex: 1 }}>Privacy Policy</h1>
      <p sx={{ variant: 'type.subtitle' }}>What?</p>
      <p>
        We collect information from a variety of sources, including information
        provided by you, information we collect when you visit our website,
        transaction information, and information we collect about you from third
        party sources. This information may include:
      </p>
      <ul>
        <li>Social Security Number</li>
        <li>Account Balances, Employment Information and Income</li>
        <li>Credit History and Scores</li>
        <li>Name</li>
        <li>Physical Mailing Address, including Zip Code</li>
        <li>Email Address</li>
        <li>Telephone Number(s)</li>
        <li>Mobile Number(s)</li>
        <li>IP Address</li>
        <li>Geo-Location Data</li>
      </ul>
    </article>
  </div>
)

/**
 * Where applicants give us their SSN and DOB.
 */
const VerifyIdentityPage = () => {
  return (
    <Layout>
      <SEO title="Verify your identity" />
      <ModalContext.Consumer>
        {dispatch => (
          <Main>
            <Container
              sx={{
                px: 3,
                py: 4,
                maxWidth: theme => theme.breakpoints[0],
                display: 'flex',
                flexFlow: 'column nowrap',
              }}
            >
              <header>
                <h1 sx={{ variant: 'type.title', mb: 3 }}>
                  Verify your identity
                </h1>
              </header>

              <p
                sx={{
                  variant: 'type.body',
                  mb: 3,
                }}
              >
                <Icon
                  name="lock"
                  alt=""
                  width={16}
                  height={16}
                  sx={{ mr: 1 }}
                />
                Your information is encrypted and held securely according to{' '}
                <Link
                  onClick={(e: Event) => {
                    e.preventDefault()
                    dispatch({
                      type: 'SET_CONTENT',
                      payload: <PrivacyPolicyModal />,
                    })
                    dispatch({ type: 'OPEN' })
                  }}
                  to=""
                  sx={{ variant: 'links.default' }}
                >
                  our privacy policy
                </Link>
                .
              </p>

              <Flex
                as="form"
                sx={{
                  flexFlow: 'column nowrap',
                }}
              >
                <TextField
                  label="Social Security Number"
                  type="text"
                  hint="123-45-6789"
                  sx={{ mb: 3 }}
                />
                <TextField label="Date of birth" type="date" sx={{ mb: 3 }} />

                <Button variant="primary">Next</Button>
              </Flex>
            </Container>
          </Main>
        )}
      </ModalContext.Consumer>
    </Layout>
  )
}

export default VerifyIdentityPage
