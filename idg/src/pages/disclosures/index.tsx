/**@jsx jsx */
import { jsx, Container, Main, Flex } from 'theme-ui'
import {
  useEffect,
  useRef,
  useState,
  useContext,
  FormEventHandler,
  ReactNode,
} from 'react'
import { navigate } from 'gatsby'
import { Button, Checkbox } from 'c-components'
import { DefaultLayout as Layout } from '../../components/layouts'
import { SEO } from '../../components/seo'
import { ModalContext } from '../../contexts/modal'
import { CreditInquiryModal } from './credit-inquiry'
import { DisputeResolutionModal } from './dispute-resolution'
import { EdcaModal } from './edca'
import { PrivacyPolicyModal } from './privacy-policy'
import { TcpaModal } from './tcpa'

interface ModalLinkProps {
  modalContent: ReactNode
  children: ReactNode
}
/* eslint-disable jsx-a11y/anchor-is-valid */
const ModalLink = ({ modalContent, children }: ModalLinkProps) => {
  const dispatch = useContext(ModalContext)
  const openModal = (content: ReactNode) => {
    dispatch({ type: 'SET_CONTENT', payload: content })
    dispatch({ type: 'OPEN' })
  }
  return (
    <a
      role="button"
      sx={{ variant: 'links.default' }}
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault()
          openModal(modalContent)
        }
      }}
      onClick={e => {
        e.preventDefault()
        openModal(modalContent)
      }}
    >
      {children}
    </a>
  )
}
/* eslint-enable jsx-a11y/anchor-is-valid */

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
    /* TODO: Add validation and submit navigation */
    e.preventDefault()
    console.log('form submitted. Consented to: ', {
      edcaConsent,
      privacyPolicyConsent,
      disputeResolutionConsent,
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
