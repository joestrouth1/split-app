/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Button } from '../../Button'

/**
 * Congrats customer, you're pre-qual'd for up to X amt.
 * @visibleName Prequalified
 */
export const Prequalified = () => {
  return (
    <Flex as="main" sx={{ flexFlow: 'column nowrap' }}>
      <header sx={{ px: 3, pt: 4 }}>
        <h1 sx={{ variant: 'type.title', mb: 3 }}>Nice!</h1>
        <p sx={{ variant: 'type.subtitle', mb: 4 }}>
          You're pre-qualified for up to:
        </p>
      </header>
      <img
        src="https://placebear.com/311/240"
        alt="However much they're qualified for"
        sx={{
          maxWidth: '100%',
          height: 'auto',
          alignSelf: 'center',
          mb: 4,
        }}
      />

      <Flex sx={{ px: 3, pb: 4, m: 0, flexFlow: 'column nowrap' }}>
        <p
          sx={{
            variant: 'type.body',
            mb: 3,
          }}
        >
          Next up, you'll need your bank details. Ready?
        </p>

        <Button variant="primary">Let's go</Button>
      </Flex>
    </Flex>
  )
}
