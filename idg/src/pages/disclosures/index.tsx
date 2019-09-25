/**@jsx jsx */
import { jsx, Container, Main, Flex } from 'theme-ui'
import { useEffect, useRef, useState, FormEventHandler } from 'react'
import { navigate } from 'gatsby'
import { Button, Checkbox } from 'c-components'
import { DefaultLayout as Layout } from '../../components/layouts'
import { ModalLink } from '../../components/modal-link'
import { SEO } from '../../components/seo'
import { CreditInquiryModal } from './credit-inquiry'
import { DisputeResolutionModal } from './dispute-resolution'
import { EdcaModal } from './edca'
import { PrivacyPolicyModal } from './privacy-policy'
import { TcpaModal } from './tcpa'

/**
 * Where applicants accept our policies.
 */
const DisclosuresPage = () => {
  const [edcaConsent, setEdcaConsent] = useState<boolean>(false)
  const [privacyPolicyConsent, setPrivacyPolicyConsent] = useState<boolean>(
    false
  )
  const [disputeResolutionConsent, setDisputeResolutionConsent] = useState<
    boolean
  >(false)
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
    disputeResolutionConsent,
    creditInquiryConsent,
    tcpaConsent,
  ])
  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
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
            data-testid="disclosures-form"
          >
            <Checkbox
              required
              name="edcaConsent"
              onChange={() => setEdcaConsent(!edcaConsent)}
            >
              By checking this box, I agree to the terms and conditions set out
              in the{' '}
              <ModalLink modalContent={<EdcaModal />}>
                Consent to Electronic Disclosure and Communication Agreement.
              </ModalLink>
            </Checkbox>
            <Checkbox
              required
              name="privacyPolicyConsent"
              onChange={() => setPrivacyPolicyConsent(!privacyPolicyConsent)}
            >
              By checking this box, I agree to the terms of the{' '}
              <ModalLink modalContent={<PrivacyPolicyModal />}>
                Privacy Policy.
              </ModalLink>
            </Checkbox>
            <Checkbox
              required
              name="disputeResolutionConsent"
              onChange={() =>
                setDisputeResolutionConsent(!disputeResolutionConsent)
              }
            >
              By checking this box, I acknowledge that I have read, understand
              and agree to the terms and conditions of the{' '}
              <ModalLink modalContent={<DisputeResolutionModal />}>
                Agreements for Resolving Disputes
              </ModalLink>{' '}
              which includes a binding arbitration agreement.
            </Checkbox>
            <Checkbox
              required
              name="creditInquiryConsent"
              onChange={() => setCreditInquiryConsent(!creditInquiryConsent)}
            >
              By checking this box, I authorize Brand to the application terms
              outlined in the{' '}
              <ModalLink modalContent={<CreditInquiryModal />}>
                Consumer Credit Inquiry and Reporting Agreement.
              </ModalLink>
            </Checkbox>
            <Checkbox
              sx={{ my: 3 }}
              name="tcpaConsent"
              checked={tcpaConsent}
              onChange={() => setTcpaConsent(!tcpaConsent)}
            >
              By checking this box, I authorize Brand to contact me via
              automated phone calls and/or text messages in accordance with the{' '}
              <ModalLink modalContent={<TcpaModal />}>
                Telecommunications Policy
              </ModalLink>{' '}
              (optional).
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
