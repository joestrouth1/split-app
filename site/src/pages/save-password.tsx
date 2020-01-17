/**@jsx jsx */
import { jsx, Flex, Container, Main } from 'theme-ui'
import { FormEventHandler, useState, Fragment } from 'react'
import { TextField, Button, Icon, Select } from 'components'
import { navigate } from 'gatsby'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'

const handleSubmit: FormEventHandler = e => {
  e.preventDefault()
  navigate('/scan-id')
}

interface StatusIconProps {
  isValid: boolean
}
const StatusIcon = ({ isValid }: StatusIconProps) => (
  <Icon
    name={isValid ? 'check' : 'times'}
    alt={`Requirement ${!isValid && 'not yet '}met`}
    fill={isValid ? 'primary' : 'red'}
    width={16}
    height={16}
    sx={{ mr: 1 }}
  />
)

/** Where applicants choose a password for their new account */
const SavePasswordPage = () => {
  const [password, setPassword] = useState('')
  const [securityQuestion, setSecurityQuestion] = useState('')
  const [securityAnswer, setSecurityAnswer] = useState('')

  const isMultiCase = /[A-Z]/.test(password) && /[a-z]/.test(password)
  const isComplex = /[\d\W_]/.test(password)
  const isCorrectLength = 8 <= password.length && password.length <= 25

  const isValid =
    isMultiCase &&
    isComplex &&
    isCorrectLength &&
    securityQuestion &&
    securityAnswer

  return (
    <Layout>
      <SEO title="Save your progress" />
      <Main>
        <Container
          sx={{
            px: 3,
            pt: 3,
            pb: 4,
            maxWidth: theme => theme.breakpoints[0],
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
            Finish applying any time.
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
              onChange={e => {
                setPassword(e.target.value)
              }}
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
                    <StatusIcon isValid={isMultiCase} />
                    <span>Uppercase and lowercase letters (e.g. Aa)</span>
                  </div>
                  <div
                    sx={{
                      display: 'flex',
                      flexFlow: 'row nowrap',
                      alignItems: 'center',
                    }}
                  >
                    <StatusIcon isValid={isComplex} />
                    <span>At least one number or symbol</span>
                  </div>
                  <div
                    sx={{
                      display: 'flex',
                      flexFlow: 'row nowrap',
                      alignItems: 'center',
                    }}
                  >
                    <StatusIcon isValid={isCorrectLength} />
                    <span>8-25 characters long</span>
                  </div>
                </Fragment>
              }
            />

            <Select
              label="Security question"
              required
              name="security-question"
              value={securityQuestion}
              onChange={e => setSecurityQuestion(e.target.value)}
              sx={{
                mb: 3,
              }}
            >
              <option value="" disabled></option>
              <option value="wedding-reception">
                Where was your wedding reception held?
              </option>
              <option value="favorite-pet">
                What is the name of your favorite pet?
              </option>
              <option value="home-street">
                What street did you grow up on?
              </option>
              <option value="favorite-color">
                What is your favorite color?
              </option>
              <option value="first-grade-teacher">
                What is the name of your first grade teacher?
              </option>
              <option value="first-car">
                What was the make of your first car?
              </option>
            </Select>

            <TextField
              label="Security question answer"
              required
              name="security-answer"
              value={securityAnswer}
              onChange={e => {
                setSecurityAnswer(e.target.value)
              }}
              sx={{
                mb: 3,
              }}
            />

            <Button variant="primary" type="submit" disabled={!isValid}>
              Next
            </Button>
          </Flex>
        </Container>
      </Main>
    </Layout>
  )
}

export default SavePasswordPage
