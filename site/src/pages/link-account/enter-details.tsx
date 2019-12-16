/**@jsx jsx */
import { jsx, Container, Main, Flex } from 'theme-ui'
import { Link, navigate } from 'gatsby'
// TODO: add form ref, check validity to Form
import { useState, useEffect, useRef, FormEventHandler } from 'react'
import { TextField, Button, Alert, Icon } from 'components'
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

  // This isn't being used right now, will be used to display alert in case of bad request
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [serverRejected, setServerRejected] = useState(false)

  const formRef = useRef<HTMLFormElement>(null)
  const [isValid, setIsValid] = useState(false)
  useEffect(() => {
    setIsValid((formRef.current && formRef.current.checkValidity()) || false)
  }, [accountNumber, routingNumber, formRef.current])

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

            {/*
            TODO:
            [] Add debit card input
            [] Add autopay opt-in/out button(s)
            */}

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

export default AccountDetailsPage
