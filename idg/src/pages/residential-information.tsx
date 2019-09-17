/**@jsx jsx */
import { jsx, Flex, Main, Container } from 'theme-ui'
import {
  useState,
  useRef,
  useEffect,
  FormEventHandler,
  ChangeEvent,
} from 'react'
import { navigate } from 'gatsby'
import { Button, TextField } from 'c-components'
import { parse } from 'query-string'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
import { sanitizeQueryField } from '../util'

interface Address {
  address1?: string
  address2?: string
  city?: string
  state?: string
  zip?: string
  phone?: string
}

interface ResidentialInfoPageProps {
  location: Location
}

/** Where applicants tell us their home address. */
function ResidentialInfoPage({ location }: ResidentialInfoPageProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()
    navigate('/secure-account')
  }
  const isValid = formRef.current && formRef.current.checkValidity()

  const [address, replaceAddress] = useState<Address>(() => {
    // look for initial data in query string
    const parsedQueryString = parse(location.search)
    // Look for user-entered values in sessionStorage
    const sessionAddress: Address =
      (sessionStorage.address && JSON.parse(sessionStorage.address)) || {}
    const {
      address1 = '',
      address2 = '',
      city = '',
      state = '',
      zip = '',
      phone = '',
    } = parsedQueryString
    // sanitize said data to remove arrays/nulls/etc
    const sanitizedAddress = Object.entries({
      address1,
      address2,
      city,
      state,
      zip,
      phone,
    })
      .map(
        ([key, value]) =>
          [key, sanitizeQueryField(value)] as [keyof Address, string]
      )
      .reduce<Address>((obj, [key, val]) => {
        // Prefer user-entered values over URL params
        if (sessionAddress[key]) {
          obj[key] = sessionAddress[key]
        } else {
          obj[key] = val
        }
        return obj
      }, {})
    return sanitizedAddress
  })
  function setField<T extends keyof Address>(fieldName: T) {
    return (e: ChangeEvent<HTMLInputElement>) =>
      replaceAddress({ ...address, [fieldName]: e.target.value })
  }
  useEffect(() => {
    sessionStorage.address = JSON.stringify(address)
  }, [address])

  return (
    <Layout>
      <SEO title="Residential information" />
      <Main>
        <Container
          sx={{ px: 3, py: 4, maxWidth: theme => theme.breakpoints[0] }}
        >
          <h1 sx={{ variant: 'type.title', mb: 3 }}>Where do you live?</h1>
          <form
            onSubmit={handleSubmit}
            data-testid="residential-info-form"
            ref={formRef}
          >
            <Flex
              sx={{
                flexFlow: 'column nowrap',
              }}
            >
              <TextField
                label="Address"
                name="address1"
                autoComplete="address-line1"
                required
                sx={{ mb: 3 }}
                onChange={setField('address1')}
                value={address.address1}
              />

              <TextField
                label="Apartment, suite, or building (optional)"
                name="address2"
                autoComplete="address-line2"
                sx={{ mb: 3 }}
                onChange={setField('address2')}
                value={address.address2}
              />

              <TextField
                label="City"
                name="city"
                autoComplete="address-level2"
                required
                sx={{ mb: 3 }}
                onChange={setField('city')}
                value={address.city}
              />

              <Flex sx={{ flexFlow: 'row nowrap', mb: 3 }}>
                <TextField
                  label="State"
                  name="state"
                  autoComplete="address-level3"
                  required
                  sx={{ flex: 2, mr: 1 }}
                  onChange={setField('state')}
                  value={address.state}
                  /* TODO add dataset */
                />
                <TextField
                  label="ZIP"
                  name="zip"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={5}
                  autoComplete="postal-code"
                  required
                  onChange={setField('zip')}
                  value={address.zip}
                  sx={{
                    flex: 1,
                  }}
                />
              </Flex>

              <TextField
                label="Phone number"
                name="phone"
                inputMode="tel"
                autoComplete="mobile tel"
                required
                sx={{ mb: 3 }}
                onChange={setField('phone')}
                value={address.phone}
              />
              <Flex
                onClick={() =>
                  !isValid &&
                  formRef.current &&
                  formRef.current.reportValidity()
                }
              >
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!isValid}
                  sx={{ flex: 1 }}
                >
                  Next
                </Button>
              </Flex>
            </Flex>
          </form>
        </Container>
      </Main>
    </Layout>
  )
}
export default ResidentialInfoPage
