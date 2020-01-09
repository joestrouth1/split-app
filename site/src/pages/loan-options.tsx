/**@jsx jsx */
import { jsx, Main, Container, Flex } from 'theme-ui'
import { RadioGroup, RadioOption, Button } from 'components'
import { useState, ChangeEventHandler, Fragment, FormEventHandler } from 'react'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
import { formatCurrency } from '../utils/currency'
import { navigate } from 'gatsby'

interface LoanOption {
  id: string
  amount: number
  payment: number
  apr: number
  termLength: number
  termUnits: 'months' | 'payments'
}

/**
 * TODO: get these options from an API on load, location state on navigation,
 * or ApplicationContext
 */
const options: LoanOption[] = [
  {
    id: 'first',
    amount: 5000.0,
    payment: 140.17,
    apr: 99.982,
    termLength: 18,
    termUnits: 'months',
  },
  {
    id: 'second',
    amount: 2500.0,
    payment: 125.19,
    apr: 99.829,
    termLength: 12,
    termUnits: 'months',
  },
  {
    id: 'third',
    amount: 1500.0,
    payment: 114.47,
    apr: 99.291,
    termLength: 10,
    termUnits: 'months',
  },
]

const loanLabelStyles = {
  fontSize: 1,
  color: 'text',
  letterSpacing: 'caps',
  textTransform: 'uppercase',
} as const

const loanDataPrimaryStyles = { variant: 'type.subtitle' } as const

const loanDataSecondaryStyles = {
  variant: 'type.body',
  color: 'greens.8',
} as const

const LoanOptionRadios = ({ options }: { options: LoanOption[] }) => {
  return (
    <Fragment>
      {options.map(({ id, amount, payment, apr, termLength, termUnits }) => {
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

              <Flex
                sx={{ flexFlow: 'row nowrap', justifyContent: 'space-between' }}
              >
                <Flex sx={{ flexFlow: 'column nowrap' }}>
                  <span sx={loanLabelStyles}>Loan term</span>
                  <span sx={loanDataSecondaryStyles}>
                    {termLength} {termUnits}
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
      })}
    </Fragment>
  )
}

const LoanOptionsPage = () => {
  const [selectedOption, setSelectedOption] = useState<LoanOption>()
  const selectOption: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target
    const matchingOption = options.find(({ id }) => id === value)
    setSelectedOption(matchingOption)
  }
  const isValid = selectedOption != null

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    if (e.currentTarget.checkValidity()) {
      console.log({ selectedOption, isValid })
      navigate('/sign-docs')
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
              Customize your loan by selecting an amount and term that fit your
              needs.
            </p>
          </header>
          <form
            sx={{ display: 'flex', flexFlow: 'column nowrap' }}
            onSubmit={handleSubmit}
          >
            <RadioGroup
              name="autopay"
              sx={{
                mb: 3,
                flexFlow: 'column nowrap',
              }}
              value={selectedOption?.id}
              onChange={selectOption}
            >
              <LoanOptionRadios options={options} />
            </RadioGroup>
            <Button variant="primary" type="submit">
              Next
            </Button>
          </form>
        </Container>
      </Main>
    </Layout>
  )
}

export default LoanOptionsPage
