/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { Button, TextField, Icon } from 'c-components'
import { navigate } from 'gatsby'
import Link from '../components/link'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
import { ModalContext } from '../contexts/modal'
import PrivacyPolicyModal from './privacy-policy/modal'
import { FormEventHandler } from 'react'

/**
 * Where applicants give us their SSN and DOB.
 */
const VerifyIdentityPage = () => {
  /* TODO: add isValid check, button wrapper to reportValidity, conditionally disable button */
  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()
    navigate('/link-account')
  }
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

              <form
                sx={{ display: 'flex', flexFlow: 'column nowrap' }}
                onSubmit={handleSubmit}
              >
                <TextField
                  label="Social Security Number"
                  type="text"
                  hint="123-45-6789"
                  pattern="[0-9-]*"
                  sx={{ mb: 3 }}
                  required
                />
                <TextField
                  label="Date of birth"
                  type="date"
                  sx={{ mb: 3 }}
                  required
                />

                <Button variant="primary">Next</Button>
              </form>
            </Container>
          </Main>
        )}
      </ModalContext.Consumer>
    </Layout>
  )
}

export default VerifyIdentityPage
