/**@jsx jsx */
import { jsx } from 'theme-ui'
import { Footer as BaseFooter } from 'components'
import { ComponentPropsWithoutRef, HTMLAttributes } from 'react'
import { VergePrivacyModal } from '../pages/disclosures/verge-privacy'
import { StridePolicyModal } from '../pages/disclosures/stride-privacy'
import { ModalLink } from '../components/modal-link'

type PolicyLinksProps = HTMLAttributes<HTMLDivElement>
const PolicyLinks = (props: PolicyLinksProps) => (
  <div sx={{ variant: 'type.body' }} {...props}>
    <p sx={{ fontSize: 3, lineHeight: 'heading', mt: 0, mb: 2 }}>Privacy:</p>
    <ModalLink
      modalContent={<VergePrivacyModal />}
      sx={{ mt: 0, mb: 2, display: 'block' }}
    >
      Privacy Policy
    </ModalLink>
    <ModalLink modalContent={<StridePolicyModal />} sx={{ mt: 0, mb: 2 }}>
      Stride Bank Privacy Policy
    </ModalLink>
  </div>
)

type FooterProps = ComponentPropsWithoutRef<typeof BaseFooter>

export const Footer = ({ ...props }: FooterProps) => (
  <BaseFooter {...props}>
    <BaseFooter.Copyright sx={{ mb: 3 }} />
    <BaseFooter.Contact sx={{ mb: 3 }} />
    <PolicyLinks sx={{ mb: 3 }} />
    <BaseFooter.Disclaimers sx={{ mb: 3 }} />
  </BaseFooter>
)
