/**@jsx jsx */
import { jsx, Flex, Container, Main } from 'theme-ui'
import {
  useState,
  useEffect,
  useCallback,
  FormEventHandler,
  useRef,
} from 'react'
import { navigate, Link } from 'gatsby'
import { TextField, Button, Icon } from 'c-components'
import PrivacyPolicyModal from './privacy-policy/modal'
import { ModalContext } from '../contexts/modal'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
import { parse } from 'query-string'
import { sanitizeQueryField } from '../util'

interface PersonalInfoPageProps {
  location: Location
}

interface User {
  first: string
  middle: string
  last: string
  email: string
}

const PersonalInfoPage = ({ location }: PersonalInfoPageProps) => {
  // Find User values passed in query string
  const parsedQueryString = parse(location.search)
  const { first = '', middle = '', last = '', email = '' } = parsedQueryString
  let initialUser = {
    first: sanitizeQueryField(first),
    middle: sanitizeQueryField(middle),
    last: sanitizeQueryField(last),
    email: sanitizeQueryField(email),
  }
  // Find User values saved from previous submissions (navigating back)
  // Prefer user-entered/saved values over affiliate query strings
  const sessionUser =
    typeof window === 'undefined'
      ? null
      : sessionStorage.user && JSON.parse(sessionStorage.user)
  if (sessionUser) initialUser = Object.assign(initialUser, sessionUser)

  const [user, replaceUser] = useState<User>(initialUser)
  useEffect(() => {
    sessionStorage.user = JSON.stringify(user)
  }, [user])

  const setUserField = useCallback(
    <K extends keyof User, T extends User[K]>(field: K, value: T) => {
      replaceUser(user => ({ ...user, [field]: value }))
    },
    []
  )

  const formRef = useRef<HTMLFormElement>(null)
  const [isValid, setIsValid] = useState<boolean>(false)
  useEffect(() => {
    setIsValid((formRef.current && formRef.current.checkValidity()) || false)
  }, [formRef.current, user])

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()
    navigate('/save-password')
  }

  return (
    <Layout>
      <SEO title="Basic info" />
      <ModalContext.Consumer>
        {dispatch => (
          <Main>
            <Container
              sx={{ px: 3, py: 4, maxWidth: theme => theme.breakpoints[0] }}
            >
              <h1 sx={{ variant: 'type.title', mb: 4 }}>
                Let&rsquo;s get to know each other
              </h1>

              <form
                sx={{ display: 'flex', flexFlow: 'column nowrap' }}
                ref={formRef}
                onSubmit={handleSubmit}
                data-testid="personal-info-form"
              >
                {/* First name and middle initial */}
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
                        sx={{ mr: 1 }}
                        width={16}
                        height={16}
                      />
                      <span>
                        We take your privacy seriously.{' '}
                        <Link
                          onClick={e => {
                            e.preventDefault()
                            dispatch({
                              type: 'SET_CONTENT',
                              payload: <PrivacyPolicyModal />,
                            })
                            dispatch({ type: 'OPEN' })
                          }}
                          to=""
                          sx={{ variant: 'links.default' }}
                        >
                          Our policy
                        </Link>
                      </span>
                    </div>
                  }
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
              </form>
            </Container>
          </Main>
        )}
      </ModalContext.Consumer>
    </Layout>
  )
}

export default PersonalInfoPage
