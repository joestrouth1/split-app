/**@jsx jsx */
import { jsx, Flex, Container, Main } from 'theme-ui'
import {
  FormEventHandler,
  useState,
  useMemo,
  useContext,
  Fragment,
} from 'react'
import { TextField, Button, Icon, Select, Checkbox } from 'components'
import { navigate } from 'gatsby'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
import { ModalLink } from '../components/modal-link'
import { VergePrivacyModal } from '../pages/disclosures/verge-privacy'
import { EsignActConsentModal } from '../pages/disclosures/esign-act-consent'
import { RoutingContext, UserFlow } from '../contexts/routing'

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

/** Where Loan By Phone customers land to set up their account */
const CreateAccountByPhonePage = () => {
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [securityQuestion, setSecurityQuestion] = useState('')
  const [securityAnswer, setSecurityAnswer] = useState('')
  const [esignConsent, setEsignConsent] = useState(false)

  const isMultiCase = /[A-Z]/.test(password) && /[a-z]/.test(password)
  const isComplex = /[\d\W_]/.test(password)
  const isCorrectLength = 8 <= password.length && password.length <= 25

  const isValid = useMemo(() => {
    return (
      isMultiCase &&
      isComplex &&
      isCorrectLength &&
      securityQuestion &&
      securityAnswer &&
      esignConsent
    )
  }, [
    isMultiCase,
    isComplex,
    isCorrectLength,
    securityQuestion,
    securityAnswer,
    esignConsent,
  ])

  const { currentFlow, setCurrentFlow } = useContext(RoutingContext)

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()
    if (currentFlow !== UserFlow.LOAN_BY_PHONE) {
      setCurrentFlow(UserFlow.LOAN_BY_PHONE)
    }
    navigate('/disclosures')
  }

  return (
    <Layout>
      <SEO title="Create your account" />
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
            <h1
              sx={{
                variant: 'type.title',
                mb: 3,
              }}
            >
              Create your account
            </h1>
          </header>

          <Flex
            as="form"
            sx={{ flexFlow: 'column nowrap' }}
            onSubmit={handleSubmit}
            data-testid="create-account-form"
          >
            <TextField
              required
              label="Email address"
              name="email"
              autoComplete="email"
              value={emailAddress}
              type="email"
              onChange={e => setEmailAddress(e.target.value)}
              sx={{
                mb: 3,
              }}
              hint={
                <div
                  sx={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    name="lock"
                    alt=""
                    fill="grays.7"
                    sx={{ mr: 2, flexShrink: 0 }}
                    width={16}
                    height={16}
                  />
                  <span>
                    We take your privacy seriously.{' '}
                    <ModalLink modalContent={<VergePrivacyModal />}>
                      Our policy
                    </ModalLink>
                  </span>
                </div>
              }
            />
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
              name="security-answer"
              label="Security question answer"
              value={securityAnswer}
              onChange={e => {
                setSecurityAnswer(e.target.value)
              }}
              sx={{
                mb: 3,
              }}
            />

            <Checkbox
              checked={esignConsent}
              onChange={() => setEsignConsent(!esignConsent)}
              name="econsent"
              required
              sx={{
                mb: 3,
              }}
            >
              I have read, understood, and consent to the language and
              authorizations outlined in{' '}
              <ModalLink modalContent={<EsignActConsentModal />}>
                the Notice and Consent of Electronic Records.
              </ModalLink>
            </Checkbox>

            <Button variant="primary" type="submit" disabled={!isValid}>
              Next
            </Button>
          </Flex>
        </Container>
      </Main>
    </Layout>
  )
}

export default CreateAccountByPhonePage
