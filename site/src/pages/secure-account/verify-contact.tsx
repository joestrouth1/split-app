/**@jsx jsx */
import { jsx, Container, Main, Flex } from 'theme-ui'
import { parse } from 'query-string'
import { useState, useEffect } from 'react'
import { Icon, TextField } from 'components'
import { DefaultLayout as Layout } from '../../components/layouts'
import { SEO } from '../../components/seo'
import { Link } from 'gatsby'

interface SecureAccountVerificationPageProps {
  location: {
    search: string
  }
}

function maskEmail(email: string): string {
  const [address, host] = email.split('@')
  const [firstLetter, secondLetter, ...rest] = address.split('')
  const placeholderLength = Math.max(rest.length, 5)
  const placeholders = '*'.repeat(placeholderLength)
  return `${firstLetter}${secondLetter}${placeholders}@${host}`
}

function maskPhone(phone: string): string {
  const digits = phone.split('')
  const lastFour = digits.splice(digits.length - 4)
  return `***-***-${lastFour.join('')}`
}

/**
 * Where customers confirm their contact info for 2FA.
 */
const SecureAccountVerificationPage = ({
  location,
}: SecureAccountVerificationPageProps) => {
  /* TODO: 
    ✔ If method=sms, get the # they entered
    [] and confirm that's where we should send their code.
  */
  /**
   * Add text field for code entry, button to submit code that's disabled until input is of length n
   * Add failure state - conditionally render a negative alert if code is invalid
   * Add success state - render a positive alert for n milliseconds, then navigate to next page
   * Add worst case scenario - if failureCount >= 5(?), stop displaying input, render negative alert, and links to contact us and/or resend their code
   */
  const [method] = useState(() => {
    const parsedQueryString = parse(location.search)
    let { method } = parsedQueryString
    if (Array.isArray(method) || !method) {
      method = 'sms'
    }
    return method
  })

  const methodText = method === 'sms' ? 'Text' : 'Email'

  const [savedContact] = useState<string>(() => {
    if (typeof window === 'undefined') return ''
    if (method === 'email') {
      const user =
        (sessionStorage &&
          sessionStorage.user &&
          JSON.parse(sessionStorage.user)) ||
        {}
      return user.email || ''
    } else {
      const address =
        (sessionStorage &&
          sessionStorage.address &&
          JSON.parse(sessionStorage.address)) ||
        {}
      return address.phone || ''
    }
  })
  const [useExisting, setUseExisting] = useState<boolean>(Boolean(savedContact))
  const [currentContact, setCurrentContact] = useState<string>(savedContact)
  useEffect(() => {
    if (useExisting) {
      setCurrentContact(savedContact)
    }
  }, [useExisting, savedContact])
  const maskingFunction = method === 'sms' ? maskPhone : maskEmail

  return (
    <Layout>
      <SEO title="Confirm your contact information" />
      <Main>
        <Container
          sx={{
            px: 3,
            pt: 3,
            pb: 4,
            maxWidth: theme => theme.breakpoints[0],
          }}
        >
          <header>
            <h1 sx={{ variant: 'type.title', mb: 3 }}>
              Where should we contact you?
            </h1>
          </header>
          <Flex sx={{ flexFlow: 'column nowrap', mb: 3 }}>
            {savedContact && (
              <button
                sx={{
                  variant: 'cards.radio',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2,
                  borderWidth: useExisting ? 2 : 1,
                }}
                onClick={() => setUseExisting(true)}
              >
                {useExisting && (
                  <Icon
                    name="check"
                    alt="Selected:"
                    fill="primary"
                    sx={{ mr: 2 }}
                    width={16}
                    height={16}
                  />
                )}
                <span
                  sx={{
                    variant: 'type.body',
                    fontWeight: useExisting ? 'bold' : 'body',
                  }}
                >
                  {maskingFunction(savedContact)}
                </span>
              </button>
            )}
            <button
              sx={{
                variant: 'cards.radio',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                borderWidth: !useExisting ? 2 : 1,
              }}
              onClick={() => setUseExisting(false)}
            >
              {!useExisting && (
                <Icon
                  name="check"
                  alt="Selected:"
                  fill="primary"
                  sx={{ mr: 2 }}
                  width={16}
                  height={16}
                />
              )}
              <span
                sx={{
                  variant: 'type.body',
                  fontWeight: !useExisting ? 'bold' : 'body',
                }}
              >
                Somewhere else
              </span>
            </button>
          </Flex>
          <Flex sx={{ flexFlow: 'column nowrap' }}>
            {!useExisting && (
              <TextField
                label={method === 'sms' ? 'Contact phone' : 'Contact email'}
                name="2fa-contact"
                value={currentContact}
                sx={{ mb: 3 }}
                onChange={e => setCurrentContact(e.currentTarget.value)}
              />
            )}
            <Link
              to="/secure-account/confirm-code"
              sx={{ variant: 'buttons.primary' }}
            >
              {methodText} my code
            </Link>
          </Flex>
        </Container>
      </Main>
    </Layout>
  )
}
export default SecureAccountVerificationPage
