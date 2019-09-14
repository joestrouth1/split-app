/**@jsx jsx */
import { jsx, Flex, Container } from 'theme-ui'
import { useState, FormEventHandler } from 'react'
import { navigate } from 'gatsby'
import { TextField, Link, Button } from 'c-components'
import { DefaultLayout as Layout } from '../components/layouts'
import SEO from '../components/seo'
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
  const parsedQueryString = parse(location.search)
  const { first = '', middle = '', last = '', email = '' } = parsedQueryString

  const [user, replaceUser] = useState<User>({
    first: sanitizeQueryField(first),
    middle: sanitizeQueryField(middle),
    last: sanitizeQueryField(last),
    email: sanitizeQueryField(email),
  })

  function setUserField<K extends keyof User, T extends User[K]>(
    field: K,
    value: T
  ) {
    replaceUser(user => ({ ...user, [field]: value }))
  }

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()
    navigate('/save-password')
  }

  return (
    <Layout>
      <SEO title="Basic info" />
      <Container sx={{ px: 3, py: 4 }}>
        <h1 sx={{ variant: 'type.title', mb: 4 }}>
          Let&apos;s get to know each other
        </h1>

        <Flex
          as="form"
          sx={{ flexFlow: 'column nowrap' }}
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
                <img src="https://placebear.com/16/16" alt="" sx={{ mr: 1 }} />
                <span>
                  We take your privacy seriously.{' '}
                  <Link href="/privacy">Our policy</Link>
                </span>
              </div>
            }
          />

          <Button variant="primary" type="submit">
            Next
          </Button>
        </Flex>
      </Container>
    </Layout>
  )
}

export default PersonalInfoPage
