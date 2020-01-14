/**@jsx jsx */
import { jsx, Container, Main, Flex } from 'theme-ui'
import { Link, navigate } from 'gatsby'
// TODO: add form ref, check validity to Form
import { useState, useEffect, useRef, FormEventHandler } from 'react'
import {
  TextField,
  Button,
  Alert,
  Icon,
  Select,
  RadioGroup,
  RadioOption,
} from 'components'
import { DefaultLayout as Layout } from '../../components/layouts'
import { Illustration } from '../../components/illustration'
import { SEO } from '../../components/seo'

interface AccountDetailsPageProps {
  location: {
    state?: {
      account?: string
      routing?: string
    }
  }
}

type MonthIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

const MONTHS: { name: string; order: MonthIndex }[] = [
  {
    name: 'January',
    order: 1,
  },
  {
    name: 'February',
    order: 2,
  },
  {
    name: 'March',
    order: 3,
  },
  {
    name: 'April',
    order: 4,
  },
  {
    name: 'May',
    order: 5,
  },
  {
    name: 'June',
    order: 6,
  },
  {
    name: 'July',
    order: 7,
  },
  {
    name: 'August',
    order: 8,
  },
  {
    name: 'September',
    order: 9,
  },
  {
    name: 'October',
    order: 10,
  },
  {
    name: 'November',
    order: 11,
  },
  {
    name: 'December',
    order: 12,
  },
]

interface CardExpiration {
  month: MonthIndex
  year: number
}

/**
 * Where applicants manually enter their bank acct. info or scan a check
 */
const AccountDetailsPage = (props: AccountDetailsPageProps) => {
  let account, routing
  if (props.location.state) {
    account = props.location.state.account
    routing = props.location.state.routing
  }
  const [routingNumber, setRoutingNumber] = useState(routing || '')
  const [accountNumber, setAccountNumber] = useState(account || '')
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardZip, setCardZip] = useState('')
  const [cardExpiration, setCardExpiration] = useState<CardExpiration>({
    month: 1,
    year: 2020,
  })
  const [autoPayEnabled, setAutoPayEnabled] = useState<string>('true')

  // This isn't being used right now, will be used to display alert in case of bad request
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [serverRejected, setServerRejected] = useState(false)

  const formRef = useRef<HTMLFormElement>(null)
  const [isValid, setIsValid] = useState(false)
  useEffect(() => {
    setIsValid((formRef.current && formRef.current.checkValidity()) || false)
  }, [
    accountNumber,
    routingNumber,
    formRef.current,
    cardNumber,
    cardName,
    cardExpiration,
    cardZip,
    autoPayEnabled,
  ])

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    // const serverResponse = confirm(
    //   `Asking you, the server, is this OK?\n${JSON.stringify(
    //     { isValid, routingNumber, accountNumber },
    //     null,
    //     2
    //   )}`
    // )
    // if (serverResponse) {
    navigate('/disclosures')
    // } else {
    //   setServerRejected(true)
    // }
  }

  return (
    <Layout>
      <SEO title="Enter bank account details" />
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
            <h1 sx={{ variant: 'type.title', mb: 3 }}>
              Enter your account details
            </h1>
            <p sx={{ variant: 'type.subtitle', mb: 4 }}>
              <Link
                to="/link-account/scan-check"
                sx={{ variant: 'links.default' }}
              >
                Quickly scan a check
              </Link>{' '}
              or enter your numbers below:
            </p>
          </header>

          <Illustration
            sx={{
              height: 182,
              maxWidth: '100%',
              mb: 4,
            }}
          >
            <p sx={{ variant: 'type.subtitle', fontWeight: 'bold' }}>
              Check diagram, showing routing/account numbers
            </p>
          </Illustration>
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            sx={{ display: 'flex', flexFlow: 'column nowrap' }}
            data-testid="enter-details-form"
          >
            <TextField
              label="Routing number"
              name="routing"
              inputMode="numeric"
              pattern="[0-9]*"
              required
              value={routingNumber}
              onChange={e => setRoutingNumber(e.currentTarget.value)}
              sx={{
                flex: 1,
                mb: 3,
              }}
            />
            <TextField
              label="Account number"
              name="account"
              inputMode="numeric"
              pattern="[0-9]*"
              required
              value={accountNumber}
              onChange={e => setAccountNumber(e.currentTarget.value)}
              sx={{
                flex: 1,
                mb: 3,
              }}
            />

            <p sx={{ variant: 'type.subtitle', mb: 2 }}>Add a debit card</p>

            <div>
              <TextField
                label="Name on card"
                name="debit-card-name"
                autoComplete="name"
                value={cardName}
                onChange={e => setCardName(e.currentTarget.value)}
                sx={{
                  flex: 1,
                  mb: 3,
                }}
              />
              {/* TODO: Mask this to split card number groups visually */}
              <TextField
                label="Card number"
                name="debit-card-number"
                inputMode="numeric"
                autoComplete="cc-number"
                pattern="[0-9-]*"
                value={cardNumber}
                onChange={e => setCardNumber(e.currentTarget.value)}
                sx={{
                  flex: 1,
                  mb: 3,
                }}
              />
              <Flex sx={{ flexFlow: 'row nowrap', mb: 3 }}>
                <Select
                  label="Expiration month"
                  sx={{ mr: 2 }}
                  autoComplete="cc-exp-month"
                  onChange={e =>
                    setCardExpiration(exp => {
                      return {
                        ...exp,
                        month: Number(e.currentTarget.value) as MonthIndex,
                      }
                    })
                  }
                >
                  {MONTHS.map(({ name, order }) => {
                    const twoDigitMonth = order < 10 ? `0${order}` : order
                    const label = `${twoDigitMonth} ${name}`

                    return (
                      <option key={name} value={order}>
                        {label}
                      </option>
                    )
                  })}
                </Select>
                <TextField
                  label="Expiration year"
                  name="debit-card-exp-year"
                  autoComplete="cc-exp-year"
                  value={cardExpiration.year}
                  onChange={e =>
                    setCardExpiration(exp => {
                      return { ...exp, year: Number(e.currentTarget.value) }
                    })
                  }
                  sx={{
                    flex: 1,
                  }}
                />
              </Flex>
              <TextField
                label="Billing ZIP code"
                name="debit-card-zip"
                autoComplete="postal-code"
                pattern="[0-9]*"
                inputMode="numeric"
                value={cardZip}
                onChange={e => setCardZip(e.currentTarget.value)}
                sx={{
                  flex: 1,
                  mb: 3,
                }}
              />
            </div>

            {/*
            TODO:
            [x] Add debit card inputs
            [] Validate debit card inputs if 1+ are dirty
            [] Add autopay opt-in/out button(s)
            */}

            <p sx={{ variant: 'type.subtitle', mb: 2 }}>
              How would you like to pay?
            </p>
            <RadioGroup
              name="autopay"
              sx={{
                mb: 3,
                textAlign: 'center',
                flexFlow: 'column nowrap',
              }}
              value={autoPayEnabled}
              onChange={e => setAutoPayEnabled(e.target.value)}
            >
              <RadioOption value="true" sx={{ mb: 2 }} required={true}>
                Enroll in Auto Pay using the information above
                <br />
                <span sx={{ variant: 'type.hint' }}>(Recommended)</span>
              </RadioOption>
              <RadioOption value="false">Make payments manually</RadioOption>
            </RadioGroup>

            {autoPayEnabled === 'false' && (
              <p sx={{ variant: 'type.body', mb: 3 }}>
                Enrolling in Auto Pay is the most convenient way to make your
                payments. If you do not enroll in Auto Pay, you will need to
                remember to make your payments manually by your due date. You
                can do this by logging into your account to make your payment
                online or by mailing a check to Avío Credit P.O. Box 780408
                Wichita KS 67278. Payments made by check may take 7-10 days to
                process.
              </p>
            )}

            <p sx={{ variant: 'type.body', mb: 3, mt: 0 }}>
              Please review the information you provided above. The bank account
              provided is where your loan funds will be sent, if approved.
            </p>
            <Flex
              onClick={() =>
                !isValid && formRef.current && formRef.current.reportValidity()
              }
              sx={{
                flexFlow: 'row wrap',
              }}
            >
              {serverRejected && (
                <Alert
                  variant="negative"
                  sx={{
                    mb: 3,
                    maxWidth: '100%',
                    flexShrink: 0,
                  }}
                >
                  <Icon
                    name="times"
                    alt=""
                    fill="red"
                    sx={{ mr: 2, flexShrink: 0 }}
                    width={24}
                    height={24}
                  />
                  <span>
                    There was a problem with your request. Please check your
                    account details and try again.
                  </span>
                </Alert>
              )}
              <Button
                variant="primary"
                type="submit"
                disabled={!isValid}
                sx={{ flex: 1, mb: 3 }}
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

export default AccountDetailsPage
