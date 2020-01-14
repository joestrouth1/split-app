/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { Link } from 'gatsby'
import { Alert, Icon } from 'components'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
import { Illustration } from '../components/illustration'
import { formatCurrency } from '../utils/currency'
import { ReactNode, TableHTMLAttributes } from 'react'

type PaymentFrequency = 'monthly' | 'weekly'

const LoanDetailsTableRow = ({ children }: { children: ReactNode }) => (
  <tr
    role="row"
    sx={{
      variant: 'type.body',
      '& > td, & > th': {
        p: 0,
      },
      '& > td': {
        textAlign: 'right',
      },
      '& > th': {
        fontWeight: 'body',
        textAlign: 'left',
      },
    }}
  >
    {children}
  </tr>
)
interface LoanDetailsTableProps extends TableHTMLAttributes<HTMLTableElement> {
  loanNumber: number
  loanAmount: number
  firstDueDate: Date
  paymentAmount: number
  paymentFrequency: PaymentFrequency
}
const LoanDetailsTable = ({
  loanNumber,
  loanAmount,
  firstDueDate,
  paymentAmount,
  paymentFrequency,
  ...props
}: LoanDetailsTableProps) => {
  const formattedFrequency =
    paymentFrequency.charAt(0).toUpperCase() +
    paymentFrequency.substring(1).toLowerCase()

  return (
    <table {...props}>
      <tbody>
        <LoanDetailsTableRow>
          <th scope="row">Loan number</th>
          <td>{loanNumber}</td>
        </LoanDetailsTableRow>
        <LoanDetailsTableRow>
          <th scope="row">Loan amount</th>
          <td>{formatCurrency(loanAmount.toString())}</td>
        </LoanDetailsTableRow>
        <LoanDetailsTableRow>
          <th scope="row">First due date</th>
          <td>{firstDueDate.toLocaleDateString('en-us', {})}</td>
        </LoanDetailsTableRow>
        <LoanDetailsTableRow>
          <th scope="row">Payment amount</th>
          <td>{formatCurrency(paymentAmount.toString())}</td>
        </LoanDetailsTableRow>
        <LoanDetailsTableRow>
          <th scope="row">Payment frequency</th>
          <td>{formattedFrequency}</td>
        </LoanDetailsTableRow>
      </tbody>
    </table>
  )
}

const LoanCompletePage = () => {
  /**
   * TODO:
   * [] Get bank acct info from context
   * [] Calculate estimated arrival date based on today, or receive from API
   */

  return (
    <Layout>
      <SEO title="Loan complete" />
      <Main>
        <Container
          sx={{
            px: 3,
            pt: 3,
            pb: 0,
            maxWidth: theme => theme.breakpoints[0],
            display: 'flex',
            flexFlow: 'column nowrap',
            mb: 4,
          }}
        >
          <header>
            <h1 sx={{ variant: 'type.title' }}>
              Congratulations, your loan is complete!
            </h1>
          </header>
        </Container>

        <Container
          sx={{
            maxWidth: theme => theme.breakpoints[0],
            display: 'flex',
            flexFlow: 'column nowrap',
            p: 0,
            mb: 4,
          }}
        >
          <Illustration
            sx={{
              height: 240,
              maxWidth: '100%',
            }}
          >
            <p sx={{ variant: 'type.subtitle', fontWeight: 'bold' }}>
              Celebratory illustration
            </p>
          </Illustration>
        </Container>

        <Container
          sx={{
            px: 3,
            py: 0,
            maxWidth: theme => theme.breakpoints[0],
            display: 'flex',
            flexFlow: 'column nowrap',
          }}
        >
          <p sx={{ variant: 'type.body', mb: 3 }}>
            Your money is expected to be available in your BANCORP bank account
            ending in 2193 on{' '}
            <span sx={{ fontWeight: 'bold' }}>
              Friday, April 1
              <sup>
                st<small>&dagger;</small>
              </sup>
            </span>
            .
          </p>
          <h2
            sx={{ variant: 'type.subtitle', mb: 3 }}
            id="repayment-details-heading"
          >
            Repayment details
          </h2>

          {/* 
            TODO:
            [] Get loan details from props or context
           */}
          <LoanDetailsTable
            loanAmount={1500.0}
            loanNumber={88134659}
            firstDueDate={new Date()}
            paymentAmount={161.18}
            paymentFrequency={'monthly'}
            aria-labelledby={'repayment-details-heading'}
            sx={{ mb: 3 }}
          />
          <Alert variant="positive" sx={{ mb: 3 }}>
            <Icon
              name="lightbulb"
              alt=""
              fill="greens.6"
              sx={{ mr: 2, flexShrink: 0 }}
              width={24}
              height={24}
            />
            <span>
              Never miss a payment with Auto Pay!{' '}
              <Link to="/account/auto-pay" sx={{ variant: 'links.default' }}>
                Enroll now
              </Link>
            </span>
          </Alert>
          <Link
            to="/account-summary"
            sx={{ variant: 'buttons.primary', mb: 4 }}
          >
            Manage account
          </Link>
          <p sx={{ variant: 'type.disclaimer', mb: 3 }}>
            <sup>&dagger;</sup> Transfer times vary and are controlled by your
            bank. Generally, your money will be in your account by noon on the
            date stated.
          </p>
          <p sx={{ variant: 'type.disclaimer', mb: 3 }}>
            Your loan is not complete until you receive your loan funds. We
            reserve the right to cancel your request for a loan, in our sole
            discretion subject to applicable law, at any time prior to funding
            or disbursing loan funds to you.
          </p>
        </Container>
      </Main>
    </Layout>
  )
}

export default LoanCompletePage
