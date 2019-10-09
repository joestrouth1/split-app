/**@jsx jsx */
import { jsx, Container, Main, Flex } from 'theme-ui'
import { Button, SocialSecurityField, DateField, Icon } from 'components'
import { useState, useEffect, useRef, FormEventHandler } from 'react'
import { navigate } from 'gatsby'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
import { ModalLink } from '../components/modal-link'
import PrivacyPolicyModal from './privacy-policy/modal'

/**
 * Where applicants give us their SSN and DOB.
 */
const VerifyIdentityPage = () => {
  const [social, setSocial] = useState<string>('')
  const [dateOfBirth, setDateOfBirth] = useState<string>('')

  const formRef = useRef<HTMLFormElement>(null)
  const [isValid, setIsValid] = useState(false)
  useEffect(() => {
    setIsValid((formRef.current && formRef.current.checkValidity()) || false)
  }, [social, dateOfBirth, formRef.current])

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()
    navigate('/check-rates')
  }

  return (
    <Layout>
      <SEO title="Verify your identity" />
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
            <h1 sx={{ variant: 'type.title', mb: 3 }}>Verify your identity</h1>
          </header>

          <p
            sx={{
              variant: 'type.body',
              mb: 3,
            }}
          >
            <Icon name="lock" alt="" width={16} height={16} sx={{ mr: 1 }} />
            Your information is encrypted and held securely according to{' '}
            <ModalLink modalContent={<PrivacyPolicyModal />}>
              our privacy policy
            </ModalLink>
            .
          </p>

          <form
            sx={{ display: 'flex', flexFlow: 'column nowrap' }}
            onSubmit={handleSubmit}
            ref={formRef}
            data-testid="verify-identity-form"
          >
            <SocialSecurityField
              name="ssn"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}"
              sx={{ mb: 3 }}
              value={social}
              onChange={setSocial}
              required
            />
            <DateField
              label="Date of birth"
              name="dob"
              type="date"
              sx={{ mb: 3 }}
              value={dateOfBirth}
              onChange={setDateOfBirth}
              required
            />
            <Flex
              onClick={() =>
                !isValid && formRef.current && formRef.current.reportValidity()
              }
            >
              <Button
                variant="primary"
                type="submit"
                disabled={!isValid}
                sx={{ flex: 1 }}
              >
                Next
              </Button>
            </Flex>
          </form>
        </Container>
      </Main>
    </Layout>
  )
}

export default VerifyIdentityPage
