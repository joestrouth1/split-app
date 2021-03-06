/**@jsx jsx */
import { jsx, Flex, Main, Container } from 'theme-ui'
import {
  useState,
  useRef,
  useEffect,
  useCallback,
  FormEventHandler,
  ChangeEvent,
} from 'react'
import { navigate } from 'gatsby'
import { Button, TextField, Select, Typeahead } from 'components'
import { parse } from 'query-string'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
import { sanitizeQueryField } from '../utils'
import { states } from '../data/states'

interface Address {
  address1?: string
  address2?: string
  city?: string
  state?: string
  zip?: string
  phone?: string
}

interface ResidentialInfoPageProps {
  location: {
    search: string
  }
}

/**
 * Looks for a user address in the query string and/or session storage
 * Merges the two, returns the address and a setter function
 * @param queryString - location.search string to parse initial address from
 */
function usePersistedAddress(queryString = '') {
  const initialAddress = useCallback(() => {
    if (typeof window === 'undefined') return {}
    // look for initial data in query string
    const parsedQueryString = parse(queryString)
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
    // remove arrays/nulls/etc
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
        // Prefer past user input when merging with query string
        if (sessionAddress[key]) {
          obj[key] = sessionAddress[key]
        } else {
          obj[key] = val
        }
        return obj
      }, {})
    return sanitizedAddress
  }, [queryString])
  const [address, setAddress] = useState(initialAddress)
  useEffect(() => {
    sessionStorage.address = JSON.stringify(address)
  }, [address])

  return [address, setAddress] as const
}

/** Where applicants tell us their home address. */
function ResidentialInfoPage({ location }: ResidentialInfoPageProps) {
  const [address, setAddress] = usePersistedAddress(location.search)
  // generates setter functions for individual address fields
  const setAddressField = useCallback(
    <T extends keyof Address>(fieldName: T) => {
      return (e: ChangeEvent<HTMLInputElement>) =>
        setAddress({ ...address, [fieldName]: e.target.value })
    },
    [address]
  )

  const [idNumber, setIdNumber] = useState('')
  const [idType, setIdType] = useState('dl')

  const formRef = useRef<HTMLFormElement>(null)
  const [isValid, setIsValid] = useState(false)
  useEffect(() => {
    setIsValid((formRef.current && formRef.current.checkValidity()) || false)
  }, [formRef.current, address, idNumber, idType])
  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()
    // 2FA not available in Phase I
    // navigate('/secure-account')
    navigate('/current-income')
  }

  return (
    <Layout>
      <SEO title="Residential information" />
      <Main>
        <Container
          sx={{
            px: 3,
            pt: 3,
            pb: 4,
            maxWidth: theme => theme.breakpoints[0],
          }}
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
                onChange={setAddressField('address1')}
                value={address.address1}
              />

              <TextField
                label="Apartment, suite, or building (optional)"
                name="address2"
                autoComplete="address-line2"
                sx={{ mb: 3 }}
                onChange={setAddressField('address2')}
                value={address.address2}
              />

              <TextField
                label="City"
                name="city"
                autoComplete="address-level2"
                required
                sx={{ mb: 3 }}
                onChange={setAddressField('city')}
                value={address.city}
              />

              <Flex sx={{ flexFlow: 'row nowrap', mb: 3 }}>
                {/* <Typeahead
                  label="State"
                  onChange={state =>
                    setAddress(address => ({ ...address, state }))
                  }
                  required
                  autoComplete="address-level3"
                  sx={{ flex: 2, mr: 1 }}
                  items={states}
                  defaultValue={address.state}
                /> */}

                <TextField
                  label="State"
                  name="state"
                  autoComplete="address-level3"
                  required
                  sx={{ flex: 2, mr: 1 }}
                  onChange={setAddressField('state')}
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
                  onChange={setAddressField('zip')}
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
                onChange={setAddressField('phone')}
                value={address.phone}
              />

              <Select
                label="ID type"
                value={idType}
                sx={{ mb: 3 }}
                onChange={e => setIdType(e.target.value)}
              >
                <option value={'dl'}>Driver&rsquo;s License</option>
                <option value={'state'}>State ID</option>
                <option value={'passport'}>Passport</option>
              </Select>

              <TextField
                label="ID number"
                name="id-number"
                inputMode="numeric"
                required
                sx={{ mb: 3 }}
                onChange={e => setIdNumber(e.target.value)}
                value={idNumber}
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
