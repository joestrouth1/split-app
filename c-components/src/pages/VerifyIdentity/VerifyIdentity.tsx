/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Button } from '../../Button'
import { Link } from '../../Link'
import { TextField } from '../../TextField'

/**
 * Where applicants give us their SSN and DOB.
 * @visibleName Verify identity
 */
export const VerifyIdentity = () => {
  return (
    <Flex as="main" sx={{ flexFlow: 'column nowrap', px: 3, py: 4 }}>
      <header>
        <h1 sx={{ variant: 'type.title', mb: 3 }}>Verify your identity</h1>
      </header>

      <p
        sx={{
          variant: 'type.body',
          mb: 3,
        }}
      >
        <img
          src="https://placebear.com/16/16"
          alt="Security lock"
          sx={{
            display: 'inline-block',
            mr: 1,
          }}
        />
        Your information is encrypted and held securely according to{' '}
        <Link href="/privacy-policy">our privacy policy</Link>.
      </p>

      <Flex
        as="form"
        sx={{
          flexFlow: 'column nowrap',
        }}
      >
        <TextField
          label="Social Security Number"
          type="text"
          hint="123-45-6789"
          sx={{ mb: 3 }}
        />
        <TextField
          label="Date of birth"
          type="date"
          hint="MM/DD/YYYY"
          sx={{ mb: 3 }}
        />

        <Button variant="primary">Next</Button>
      </Flex>
    </Flex>
  )
}
