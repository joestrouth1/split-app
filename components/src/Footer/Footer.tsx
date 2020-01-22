/**@jsx jsx */
import { jsx, Footer as BaseFooter } from 'theme-ui'
import {
  ComponentPropsWithoutRef,
  ReactNode,
  HTMLAttributes,
  Fragment,
} from 'react'

type DisclaimersProps = HTMLAttributes<HTMLDivElement>
const Disclaimers = (props: DisclaimersProps) => {
  return (
    <div
      sx={{ variant: 'type.disclaimer', '& > p': { mt: 0, mb: 3 } }}
      {...props}
    >
      <p>
        Subject to state regulations, eligibility, credit check, underwriting
        and approval. Rates, terms and conditions apply. Lending decisions and
        funding times subject to system limitations. Some applications may
        require additional verification, which can delay the lending decision.
      </p>
      <p>
        NOTICE: The Federal Equal Credit Opportunity Act prohibits creditors
        from discriminating against credit applicants on the basis of race,
        color, religion, national origin, sex, marital status, age (provided the
        applicant has the capacity to enter into a binding contract); because
        all or part of the applicant&rsquo;s income derives from any public
        assistance program; or because the applicant has in good faith exercised
        any right under the Consumer Credit Protection Act. The Federal agency
        that administers compliance with this law concerning this creditor is
        the Office of the Comptroller of the Currency, Customer Assistance
        Group, 1301 McKinney Street, Suite 3450, Houston, TX 77010-9050.
      </p>
      <p>
        Loans are underwritten and originated in Salt Lake City, UT by Stride
        Bank (member FDIC) and serviced by Verge Credit.
      </p>
    </div>
  )
}

type CopyrightProps = HTMLAttributes<HTMLParagraphElement>
const Copyright = (props: CopyrightProps) => (
  <p sx={{ variant: 'type.body', m: 0 }} {...props}>
    &copy; {new Date().getFullYear()} Verge Credit
  </p>
)

type ContactProps = HTMLAttributes<HTMLDivElement>
const Contact = (props: ContactProps) => (
  <div sx={{ variant: 'type.body' }} {...props}>
    <p sx={{ fontSize: 3, lineHeight: 'heading', mt: 0, mb: 2 }}>Contact us:</p>
    <p sx={{ m: 0 }}>
      Phone:{' '}
      <a href="tel:+1XXXXXXXXX" sx={{ variant: 'links.default' }}>
        (XXX) XXX-XXXX
      </a>
    </p>
  </div>
)

const DefaultContent = () => (
  <Fragment>
    <Copyright sx={{ mb: 3 }} />
    <Contact sx={{ mb: 3 }} />
    <Disclaimers sx={{ mb: 3 }} />
  </Fragment>
)

type BaseFooterProps = ComponentPropsWithoutRef<typeof BaseFooter>
interface FooterProps {
  /**
   * Alternate HTML element to render instead of a `<footer>`
   */
  as?: BaseFooterProps['as']
  children?: ReactNode
}

/**
 * Bottom of the page, with legal information and/or navigation links.
 */
export const Footer = ({ children, ...props }: FooterProps) => {
  return (
    <BaseFooter
      {...props}
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
      }}
    >
      {children || <DefaultContent />}
    </BaseFooter>
  )
}

Footer.displayName = 'Footer'
Footer.Disclaimers = Disclaimers
Footer.Copyright = Copyright
Footer.Contact = Contact
