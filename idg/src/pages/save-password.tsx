/**@jsx jsx */
import { jsx, Flex, Container } from 'theme-ui'
import { DefaultLayout as Layout } from '../components/layouts'
import SEO from '../components/seo'
import { FormEventHandler, useState, Fragment } from 'react'
import { TextField, Button } from 'c-components'

const ICON_STYLES = {
  valid: `1px solid green`,
  invalid: `1px solid red`,
}

const handleSubmit: FormEventHandler = e => {
  e.preventDefault()
  console.log('submitted')
}

const SavePasswordPage = () => {
  const [password, setPassword] = useState('')

  const isMultiCase = /[A-Z]/.test(password) && /[a-z]/.test(password)
  const isComplex = /[\d\W_]/.test(password)
  const isCorrectLength = 8 <= password.length && password.length <= 25

  const isValid = isMultiCase && isComplex && isCorrectLength

  return (
    <Layout>
      <SEO title="Basic info" />
      <Container
        as="main"
        sx={{
          px: 3,
          py: 4,
          maxWidth: theme => theme.breakpoints[1],
        }}
      >
        <h1
          sx={{
            variant: 'type.title',
            mb: 3,
          }}
        >
          Save your progress
        </h1>
        <p sx={{ variant: 'type.subtitle', mb: 4 }}>
          Finish applying any time. {isValid}
        </p>

        <Flex
          as="form"
          sx={{ flexFlow: 'column nowrap' }}
          onSubmit={handleSubmit}
          data-testid="save-password-form"
        >
          <TextField
            required
            label="Password"
            name="password"
            autoComplete="new-password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            sx={{
              mb: 3,
            }}
            hint={
              <Fragment>
                <div
                  sx={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="https://placebear.com/16/16"
                    alt=""
                    sx={{
                      mr: 1,
                      border: isMultiCase
                        ? ICON_STYLES.valid
                        : ICON_STYLES.invalid,
                    }}
                  />
                  <span>Uppercase and lowercase letters (e.g. Aa)</span>
                </div>
                <div
                  sx={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="https://placebear.com/16/16"
                    alt=""
                    sx={{
                      mr: 1,
                      border: isComplex
                        ? ICON_STYLES.valid
                        : ICON_STYLES.invalid,
                    }}
                  />
                  <span>At least one number or symbol</span>
                </div>
                <div
                  sx={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="https://placebear.com/16/16"
                    alt=""
                    sx={{
                      mr: 1,
                      border: isCorrectLength
                        ? ICON_STYLES.valid
                        : ICON_STYLES.invalid,
                    }}
                  />
                  <span>8-25 characters long</span>
                </div>
              </Fragment>
            }
          />

          <Button variant="primary" type="submit" disabled={!isValid}>
            Next
          </Button>
        </Flex>
      </Container>
    </Layout>
  )
}

export default SavePasswordPage
