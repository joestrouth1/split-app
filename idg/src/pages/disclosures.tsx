/**@jsx jsx */
import { jsx, Container, Main, Flex } from 'theme-ui'
import { Button, Checkbox } from 'c-components'
import { useEffect, useRef, useState, FormEventHandler } from 'react'
import { navigate } from 'gatsby'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
// TODO: add links to each policy that open in modals
import { ModalContext } from '../contexts/modal'

/**
 * Where applicants accept our policies.
 */
const DisclosuresPage = () => {
  const [edcaConsent, setEdcaConsent] = useState<boolean>(false)
  const [privacyPolicyConsent, setPrivacyPolicyConsent] = useState<boolean>(
    false
  )
  const [arbitrationConsent, setArbitrationConsent] = useState<boolean>(false)
  const [creditInquiryConsent, setCreditInquiryConsent] = useState<boolean>(
    false
  )
  const [tcpaConsent, setTcpaConsent] = useState<boolean>(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [isValid, setIsValid] = useState<boolean>(false)
  useEffect(() => {
    setIsValid((formRef.current && formRef.current.checkValidity()) || false)
  }, [
    formRef.current,
    edcaConsent,
    privacyPolicyConsent,
    arbitrationConsent,
    creditInquiryConsent,
    tcpaConsent,
  ])
  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    /* TODO: Add validation and submit navigation */
    e.preventDefault()
    console.log('form submitted. Consented to: ', {
      edcaConsent,
      privacyPolicyConsent,
      arbitrationConsent,
      creditInquiryConsent,
      tcpaConsent,
    })
    navigate('/scoring')
  }

  return (
    <Layout>
      <SEO title="Review policies" />
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
            <h1 sx={{ variant: 'type.title', mb: 3 }}>Almost done!</h1>
            <p sx={{ variant: 'type.subtitle', mb: 4 }}>
              Please review and acknowledge the policies below.
            </p>
          </header>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexFlow: 'column nowrap',
            }}
          >
            <Checkbox
              required
              name="edcaConsent"
              onChange={() => setEdcaConsent(!edcaConsent)}
            >
              By checking this box, I agree to the terms and conditions set out
              in the Consent to Electronic Disclosure and Communication
              Agreement
            </Checkbox>
            <Checkbox
              required
              name="privacyPolicyConsent"
              onChange={() => setPrivacyPolicyConsent(!privacyPolicyConsent)}
            >
              By checking this box, I agree to the terms of the Privacy Policy.
            </Checkbox>
            <Checkbox
              required
              name="arbitrationConsent"
              onChange={() => setArbitrationConsent(!arbitrationConsent)}
            >
              By checking this box, I acknowledge that I have read, understand
              and agree to the terms and conditions of the Agreements for
              Resolving Disputes which includes a binding arbitration agreement.
            </Checkbox>
            <Checkbox
              required
              name="creditInquiryConsent"
              onChange={() => setCreditInquiryConsent(!creditInquiryConsent)}
            >
              By checking this box, I authorize{' '}
              <span sx={{ fontFamily: 'monospace' }}>brand</span> to the
              application terms outlined in the Consumer Credit Inquiry and
              Reporting Agreement.
            </Checkbox>
            <Checkbox
              sx={{ my: 3 }}
              name="tcpaConsent"
              checked={tcpaConsent}
              onChange={() => setTcpaConsent(!tcpaConsent)}
            >
              By checking this box, I authorize{' '}
              <span sx={{ fontFamily: 'monospace' }}>brand</span> to contact me
              via automated phone calls and/or text messages (optional).
            </Checkbox>
            <Flex
              onClick={() =>
                !isValid && formRef.current && formRef.current.reportValidity()
              }
            >
              <Button
                disabled={!isValid}
                variant="primary"
                type="submit"
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

export default DisclosuresPage
