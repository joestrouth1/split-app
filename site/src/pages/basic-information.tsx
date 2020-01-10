/**@jsx jsx */
import { jsx, Flex, Container, Main } from 'theme-ui'
import {
  FormEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { navigate } from 'gatsby'
import { parse } from 'query-string'
import { TextField, Button, Icon, Checkbox } from 'components'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
import { ModalLink } from '../components/modal-link'
import { VergePrivacyModal } from './disclosures/verge-privacy'
import { EsignActConsentModal } from './disclosures/esign-act-consent'
import { sanitizeQueryField } from '../utils'

interface BasicInfoPageProps {
  location: {
    search: string
  }
}

interface User {
  first: string
  middle: string
  last: string
  email: string
}

const BasicInfoPage = ({ location }: BasicInfoPageProps) => {
  /**
   * Set up User state with session persistence
   */
  const [user, replaceUser] = useState<User>(() => {
    /**
     * Prepopulate fields with affiliate query data
     */
    const parsedQueryString = parse(location.search)
    const { first = '', middle = '', last = '', email = '' } = parsedQueryString
    const initialUser: User = {
      first: sanitizeQueryField(first),
      middle: sanitizeQueryField(middle),
      last: sanitizeQueryField(last),
      email: sanitizeQueryField(email),
    }
    /**
     * Prefer persisted user entries over affiliate query data
     */
    const sessionUser: User | null =
      typeof window === 'undefined'
        ? null
        : sessionStorage.user && JSON.parse(sessionStorage.user)

    if (sessionUser) Object.assign(initialUser, sessionUser)
    return initialUser
  })
  // Persist user on every change, but remove it if all fields are empty
  useEffect(() => {
    if (Object.values(user).every(value => !value)) {
      return sessionStorage.removeItem('user')
    }
    sessionStorage.user = JSON.stringify(user)
  }, [user])

  const setUserField = useCallback(
    <K extends keyof User, T extends User[K]>(field: K, value: T) => {
      replaceUser(user => ({ ...user, [field]: value }))
    },
    []
  )

  const [econsent, setEconsent] = useState(false)

  const formRef = useRef<HTMLFormElement>(null)
  const [isValid, setIsValid] = useState(false)
  useEffect(() => {
    setIsValid((formRef.current && formRef.current.checkValidity()) || false)
  }, [formRef.current, user, econsent])

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()
    navigate('/save-password')
  }

  return (
    <Layout>
      <SEO title="Basic info" />
      <Main>
        <Container
          sx={{
            px: 3,
            pt: 3,
            pb: 4,
            maxWidth: theme => theme.breakpoints[0],
          }}
        >
          <h1 sx={{ variant: 'type.title', mb: 4 }}>
            Let&rsquo;s get to know each other
          </h1>

          <form
            sx={{ display: 'flex', flexFlow: 'column nowrap' }}
            ref={formRef}
            onSubmit={handleSubmit}
            data-testid="basic-information-form"
          >
            <Flex
              sx={{
                flexFlow: 'row nowrap',
                mb: 3,
              }}
            >
              <TextField
                required
                label="First name"
                name="firstname"
                autoComplete="given-name"
                value={user.first}
                onChange={e => setUserField('first', e.target.value)}
                sx={{
                  flex: 1,
                  mr: 2,
                }}
              />
              <TextField
                label="Middle"
                name="middleinitial"
                value={user.middle}
                onChange={e => setUserField('middle', e.target.value)}
                sx={{ flex: '0 0 56px' }}
              />
            </Flex>

            <TextField
              required
              label="Last name"
              name="lastname"
              autoComplete="family-name"
              value={user.last}
              onChange={e => setUserField('last', e.target.value)}
              sx={{ mb: 3 }}
            />

            <TextField
              required
              label="Email address"
              name="email"
              autoComplete="email"
              value={user.email}
              type="email"
              onChange={e => setUserField('email', e.target.value)}
              sx={{
                mb: 3,
              }}
              hint={
                <div
                  sx={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    name="lock"
                    alt=""
                    fill="grays.7"
                    sx={{ mr: 2, flexShrink: 0 }}
                    width={16}
                    height={16}
                  />
                  <span>
                    We take your privacy seriously.{' '}
                    <ModalLink modalContent={<VergePrivacyModal />}>
                      Our policy
                    </ModalLink>
                  </span>
                </div>
              }
            />
            <Checkbox
              checked={econsent}
              onChange={() => setEconsent(!econsent)}
              name="econsent"
              required
              sx={{
                mb: 3,
              }}
            >
              I have read, understood, and consent to the language and
              authorizations outlined in{' '}
              <ModalLink modalContent={<EsignActConsentModal />}>
                the Notice and Consent of Electronic Records.
              </ModalLink>
            </Checkbox>

            <Flex
              onClick={() =>
                !isValid && formRef.current && formRef.current.reportValidity()
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
          </form>
        </Container>
      </Main>
    </Layout>
  )
}

export default BasicInfoPage
