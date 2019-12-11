/**@jsx jsx */
import { jsx, Container, Main, Flex } from 'theme-ui'
import { useState, FormEventHandler } from 'react'
import { navigate } from 'gatsby'
import { TextField, Button } from 'components'
import { DefaultLayout as Layout } from '../../components/layouts'
import { SEO } from '../../components/seo'

const SecureAccountConfirmationPage = () => {
  const [code, setCode] = useState('')
  const [failedAttempts, setFailedAttempts] = useState(0)
  const [codeRejected, setCodeRejected] = useState(false)

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()
    const accepted = confirm(
      `Asking you, the server: Is this code right? ${code}`
    )
    if (accepted) {
      navigate('/current-income')
    } else {
      setFailedAttempts(failures => failures + 1)
      setCodeRejected(true)
    }
  }

  return (
    <Layout>
      <SEO title="Enter your verification code" />
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
            <h1 sx={{ variant: 'type.title', mb: 3 }}>Confirm your code</h1>
          </header>
          <p sx={{ variant: 'type.body', mb: 3 }}>
            Please check your messages and enter it below. It may take a few
            minutes to arrive.
          </p>
          <form
            onSubmit={handleSubmit}
            sx={{ mb: 3 }}
            data-testid="confirmation-code-form"
          >
            <Flex sx={{ flexFlow: 'column nowrap' }}>
              <TextField
                name="confirmation-code"
                label="Authentication code"
                sx={{
                  mb: 3,
                }}
                value={code}
                onChange={e => setCode(e.currentTarget.value)}
                required
                error={
                  codeRejected
                    ? `Sorry, that code didn’t work. Verify your code and try again.` +
                      (failedAttempts >= 3 && failedAttempts < 8
                        ? ` Attempts remaining: ${8 - failedAttempts}`
                        : '')
                    : ''
                }
              />
              <Button variant="primary" type="submit" disabled={!code.length}>
                Confirm my code
              </Button>
            </Flex>
          </form>

          <p sx={{ variant: 'type.body' }}>
            Having trouble?{' '}
            <button
              onClick={e => {
                e.preventDefault()
              }}
              sx={{ variant: 'buttons.link' }}
            >
              Request another code.
            </button>
          </p>
        </Container>
      </Main>
    </Layout>
  )
}

export default SecureAccountConfirmationPage
