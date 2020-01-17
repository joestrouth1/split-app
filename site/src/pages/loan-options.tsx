/**@jsx jsx */
import { jsx, Main, Container, Flex } from 'theme-ui'
import { RadioGroup, RadioOption, Button } from 'components'
import {
  useState,
  useContext,
  ChangeEventHandler,
  FormEventHandler,
} from 'react'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
import { RoutingContext, UserFlow } from '../contexts/routing'
import { formatCurrency } from '../utils/currency'
import { navigate } from 'gatsby'

interface LoanOption {
  id: string
  loanAmount: number
  paymentAmount: number
  apr: number
  termLengthInMonths: number
  termLengthInPayments: number
}

/**
 * TODO: get these options from an API on load, location state on navigation,
 * or ApplicationContext
 */
const options: LoanOption[] = [
  {
    id: 'first',
    loanAmount: 5000.0,
    paymentAmount: 477.8,
    apr: 99.982,
    termLengthInMonths: 18,
    termLengthInPayments: 20,
  },
  {
    id: 'second',
    loanAmount: 2500.0,
    paymentAmount: 299.15,
    apr: 99.829,
    termLengthInMonths: 11,
    termLengthInPayments: 13,
  },
  {
    id: 'third',
    loanAmount: 1500.0,
    paymentAmount: 199.25,
    apr: 99.291,
    termLengthInMonths: 10,
    termLengthInPayments: 11,
  },
]

interface LoanOptionRadioProps {
  /**
   * The loan option to render details of.
   */
  option: LoanOption
  /**
   * Whether this loan option is currently selected.
   */
  checked: boolean
}
const LoanOptionRadio = ({ option, checked }: LoanOptionRadioProps) => {
  const loanLabelStyles = {
    fontSize: 1,
    color: checked ? 'grays.3' : 'text',
    letterSpacing: 'caps',
    textTransform: 'uppercase',
  } as const

  const loanDataPrimaryStyles = {
    variant: 'type.subtitle',
    color: checked ? 'greens.0' : undefined,
  } as const

  const loanDataSecondaryStyles = {
    variant: 'type.body',
    color: checked ? 'greens.1' : undefined,
  } as const

  const activeCardStyles = {
    background: 'white',
    backgroundColor: 'greens.8',
  } as const

  const {
    id,
    loanAmount: amount,
    paymentAmount: payment,
    apr,
    termLengthInMonths,
    termLengthInPayments,
  } = option

  return (
    <RadioOption
      value={id}
      key={id}
      required
      sx={{
        mb: 3,
        '&:last-of-type': {
          mb: 0,
        },
        ...Object.assign({}, checked ? activeCardStyles : {}),
      }}
    >
      <div
        sx={{
          mx: 'auto',
          maxWidth: '20rem',
        }}
      >
        <Flex
          sx={{
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Flex sx={{ flexFlow: 'column nowrap' }}>
            <span sx={loanLabelStyles}>Loan amount</span>
            <span sx={loanDataPrimaryStyles}>
              {formatCurrency(amount.toString())}
            </span>
          </Flex>
          <Flex
            sx={{
              flexFlow: 'column nowrap',
              textAlign: 'right',
            }}
          >
            <span sx={loanLabelStyles}>Payment</span>
            <span sx={loanDataPrimaryStyles}>
              {formatCurrency(payment.toString())}
            </span>
          </Flex>
        </Flex>

        <Flex sx={{ flexFlow: 'row nowrap', justifyContent: 'space-between' }}>
          <Flex sx={{ flexFlow: 'column nowrap' }}>
            <span sx={loanLabelStyles}>
              Loan term
              <sup>&dagger;</sup>
            </span>
            <span sx={loanDataSecondaryStyles}>
              {termLengthInMonths} months ({termLengthInPayments} payments)
            </span>
          </Flex>
          <Flex
            sx={{
              flexFlow: 'column nowrap',
              textAlign: 'right',
            }}
          >
            <span sx={loanLabelStyles}>
              <abbr title="Annual Percentage Rate">APR</abbr>
            </span>
            <span sx={loanDataSecondaryStyles}>{apr}%</span>
          </Flex>
        </Flex>
      </div>
    </RadioOption>
  )
}

const LoanOptionsPage = () => {
  const [selectedOption, setSelectedOption] = useState<LoanOption>()
  const selectOption: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target
    const matchingOption = options.find(({ id }) => id === value)
    setSelectedOption(matchingOption)
  }

  const { currentFlow } = useContext(RoutingContext)
  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    if (e.currentTarget.checkValidity()) {
      if (currentFlow === UserFlow.LOAN_BY_PHONE) {
        navigate('/disclosures')
      } else {
        navigate('/sign-docs')
      }
    } else {
      e.currentTarget.reportValidity()
    }
  }

  return (
    <Layout>
      <SEO title="You're approved - Select your loan" />
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
            <h1
              sx={{
                variant: 'type.title',
                mb: 3,
              }}
            >
              You&rsquo;re approved!
            </h1>
            <p sx={{ variant: 'type.subtitle', mb: 4 }}>
              Select the loan that fits your needs.
            </p>
          </header>
          <form
            sx={{ display: 'flex', flexFlow: 'column nowrap', mb: 3 }}
            onSubmit={handleSubmit}
          >
            <RadioGroup
              name="autopay"
              sx={{
                mb: 3,
                flexFlow: 'column nowrap',
              }}
              value={selectedOption && selectedOption.id}
              onChange={selectOption}
            >
              {options.map(option => {
                return (
                  <LoanOptionRadio
                    option={option}
                    key={option.id}
                    checked={
                      option.id === (selectedOption && selectedOption.id)
                    }
                  />
                )
              })}
            </RadioGroup>
            <Button variant="primary" type="submit">
              Next
            </Button>
          </form>
          <p sx={{ variant: 'type.disclaimer' }}>
            <sup>&dagger;</sup>Based on your pay cycle, this term may be
            slightly longer based on payment due dates. Refer to your loan
            agreement for details.
          </p>
        </Container>
      </Main>
    </Layout>
  )
}

export default LoanOptionsPage
