/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { FormEventHandler, useState, Fragment } from 'react'
import { TextField } from '../../TextField'
import { Button } from '../../Button'

interface SavePasswordProps {
  /**
   * Function to call when the user submits a seemingly valid password
   * @default preventsDefault and logs a warning
   * */
  onSubmit: FormEventHandler
}

const ICON_STYLES = {
  valid: `1px solid green`,
  invalid: `1px solid red`,
}

const defaultHandler: FormEventHandler = e => {
  e.preventDefault()
  console.warn(`Form submitted, but you didn't pass a submit handler.`)
}

/**
 * Where users create a password for their new account.
 * @visibleName Save password
 */
export const SavePassword = ({
  onSubmit = defaultHandler,
}: SavePasswordProps) => {
  const [password, setPassword] = useState('')

  const isMultiCase = /[A-Z]/.test(password) && /[a-z]/.test(password)
  const isComplex = /[\d\W_]/.test(password)
  const isCorrectLength = 8 <= password.length && password.length <= 25

  const isValid = isMultiCase && isComplex && isCorrectLength

  return (
    <main
      sx={{
        px: 3,
        py: 4,
      }}
    >
      <h1
        sx={{
          variant: 'type.title',
          mb: 3,
        }}
      >
        Save your progress
      </h1>
      <p sx={{ variant: 'type.subtitle', mb: 4 }}>
        Finish applying any time. {isValid}
      </p>

      <Flex
        as="form"
        sx={{ flexFlow: 'column nowrap' }}
        onSubmit={onSubmit}
        data-testid="save-password-form"
      >
        <TextField
          required
          label="Password"
          name="password"
          autoComplete="new-password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          sx={{
            mb: 3,
          }}
          hint={
            <Fragment>
              <div
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                }}
              >
                <img
                  src="https://placebear.com/16/16"
                  alt=""
                  sx={{
                    mr: 1,
                    border: isMultiCase
                      ? ICON_STYLES.valid
                      : ICON_STYLES.invalid,
                  }}
                />
                <span>Uppercase and lowercase letters (e.g. Aa)</span>
              </div>
              <div
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                }}
              >
                <img
                  src="https://placebear.com/16/16"
                  alt=""
                  sx={{
                    mr: 1,
                    border: isComplex ? ICON_STYLES.valid : ICON_STYLES.invalid,
                  }}
                />
                <span>At least one number or symbol</span>
              </div>
              <div
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                }}
              >
                <img
                  src="https://placebear.com/16/16"
                  alt=""
                  sx={{
                    mr: 1,
                    border: isCorrectLength
                      ? ICON_STYLES.valid
                      : ICON_STYLES.invalid,
                  }}
                />
                <span>8-25 characters long</span>
              </div>
            </Fragment>
          }
        />

        <Button variant="primary" type="submit" disabled={!isValid}>
          Next
        </Button>
      </Flex>
    </main>
  )
}
