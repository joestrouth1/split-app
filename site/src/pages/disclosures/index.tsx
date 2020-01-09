/**@jsx jsx */
import { jsx, Container, Main, Flex } from 'theme-ui'
import { useEffect, useRef, useState, FormEventHandler } from 'react'
import { navigate } from 'gatsby'
import { Button, Checkbox } from 'components'
import { DefaultLayout as Layout } from '../../components/layouts'
import { ModalLink } from '../../components/modal-link'
import { SEO } from '../../components/seo'
import { CreditInquiryModal } from './credit-inquiry'
import { DisputeResolutionModal } from './dispute-resolution'
import { VergePrivacyModal } from './verge-privacy'
import { TcpaModal } from './tcpa'

/**
 * Where applicants accept our policies.
 */
const DisclosuresPage = () => {
  const [privacyPolicyConsent, setPrivacyPolicyConsent] = useState(false)
  const [disputeResolutionConsent, setDisputeResolutionConsent] = useState(
    false
  )
  const [creditInquiryConsent, setCreditInquiryConsent] = useState(false)
  const [tcpaConsent, setTcpaConsent] = useState(false)

  const formRef = useRef<HTMLFormElement>(null)
  const [isValid, setIsValid] = useState(false)
  useEffect(() => {
    setIsValid((formRef.current && formRef.current.checkValidity()) || false)
  }, [
    formRef.current,
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
            pt: 3,
            pb: 4,
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
              name="privacyPolicyConsent"
              onChange={() => setPrivacyPolicyConsent(!privacyPolicyConsent)}
            >
              By checking this box, I acknowledge that Stride Bank is the lender
              offering this product which is facilitated and serviced by Verge
              Credit and agree that I have read and understand{' '}
              <ModalLink modalContent={<VergePrivacyModal />}>
                Stride Bank&rsquo;s Privacy Notice
              </ModalLink>{' '}
              and{' '}
              <ModalLink modalContent={<VergePrivacyModal />}>
                Verge Credit&rsquo;s Privacy Notice
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
              By checking this box, I authorize Stride Bank to the application
              terms outlined in the{' '}
              <ModalLink modalContent={<CreditInquiryModal />}>
                Consumer Credit Inquiry and Reporting Agreement.
              </ModalLink>
            </Checkbox>
            <Checkbox
              name="tcpaConsent"
              checked={tcpaConsent}
              onChange={() => setTcpaConsent(!tcpaConsent)}
            >
              By checking this box, I authorize Stride Bank to contact me via
              automated phone calls and/or text messages in accordance with the{' '}
              <ModalLink modalContent={<TcpaModal />}>
                Telecommunications Policy
              </ModalLink>{' '}
              (optional).
            </Checkbox>
            <p sx={{ variant: 'type.disclaimer', my: 3 }}>
              Florida Residents: A documentary stamp tax required by law of
              $0.35 per $100 loaned will be paid directly to the Department of
              Revenue. Taxes are paid by Verge Credit and therefore do not
              impact your funding amount, if approved.
            </p>
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
