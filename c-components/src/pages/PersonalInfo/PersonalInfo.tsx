/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useState, FormEventHandler } from 'react'
import { TextField } from '../../TextField'
import { Link } from '../../Link'
import { Button } from '../../Button'

type User = {
  /** First name */
  first?: string
  /** Middle initial */
  middle?: string
  /** Last name */
  last?: string
  /** Email address */
  email?: string
}

interface PersonalInfoProps {
  /**
   * Details to pre-populate
   * @default { first: '', middle: '', last: '', email: '' }
   * */
  user?: User
  /** Something to do when the form submits */
  onSubmit: FormEventHandler
}

const defaultProps = { user: { first: '', middle: '', last: '', email: '' } }

/**
 * The first screen of the application process.
 * @visibleName Personal information
 */
export const PersonalInfo = (props: PersonalInfoProps) => {
  const [user, replaceUser] = useState(
    Object.assign(defaultProps.user, props.user)
  )
  function setUserField<K extends keyof User, T extends User[K]>(
    field: K,
    value: T
  ) {
    replaceUser(user => ({ ...user, [field]: value }))
  }

  return (
    <main sx={{ px: 3, py: 4 }}>
      <h1 sx={{ variant: 'type.title', mb: 4 }}>
        Let's get to know each other
      </h1>

      <Flex
        as="form"
        sx={{ flexFlow: 'column nowrap' }}
        onSubmit={props.onSubmit}
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
    </main>
  )
}

PersonalInfo.defaultProps = defaultProps
