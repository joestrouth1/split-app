/**@jsx jsx */
import { jsx, Container, Main, Flex } from 'theme-ui'
import { useState, FormEventHandler } from 'react'
import { navigate } from 'gatsby'
import { Icon, TextField, Button, Alert } from 'components'
import { DefaultLayout as Layout } from '../../components/layouts'
import { SEO } from '../../components/seo'

const SecureAccountConfirmationPage = () => {
  const [code, setCode] = useState<string>('')
  const [failedAttempts, setFailedAttempts] = useState<number>(0)
  const [codeRejected, setCodeRejected] = useState<boolean>(false)

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
          <form onSubmit={handleSubmit} sx={{ mb: 3 }}>
            <Flex sx={{ flexFlow: 'column nowrap' }}>
              <TextField
                name="confirmation-code"
                label="Authentication code"
                sx={{
                  /* TODO: remove this margin when using `error` */
                  mb: codeRejected ? 2 : 3,
                }}
                value={code}
                onChange={e => setCode(e.currentTarget.value)}
                required
              />
              {/*
                TODO: remove this block, add the text to TextField.error
                - Should 'Attempts remaining: n' be in the error as well?
                  Should it be forced to a second line, or flow naturally?
              */}
              {codeRejected && (
                <div>
                  <Alert variant="negative" sx={{ mb: 3 }}>
                    <Icon
                      name="times"
                      fill="red"
                      alt="Error"
                      width={24}
                      height={24}
                      sx={{ mr: 2, flexShrink: 0 }}
                    />
                    <span>
                      Sorry, that code didn’t work. Verify your code and try
                      again.
                    </span>
                  </Alert>
                  {failedAttempts >= 3 && failedAttempts < 8 && (
                    <p
                      sx={{ textAlign: 'center', variant: 'type.body', mb: 3 }}
                    >
                      Attempts remaining: {8 - failedAttempts}
                    </p>
                  )}
                </div>
              )}
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
