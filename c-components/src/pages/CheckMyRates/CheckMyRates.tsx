/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Button } from '../../Button'

/**
 * Confirmation screen for pre-qual applicants seeking a loan
 * @visibleName Check my rates
 */
export const CheckMyRates = () => {
  return (
    <Flex as="main" sx={{ flexFlow: 'column nowrap' }}>
      <header sx={{ px: 3, pt: 4 }}>
        <h1 sx={{ variant: 'type.title', mb: 4 }}>Making progress!</h1>
      </header>
      <img
        src="https://placebear.com/257/269"
        alt=""
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
            variant: 'type.subtitle',
            mb: 3,
          }}
        >
          Let's see if you qualify.
        </p>
        {/* TODO: Alert with icon and positive/negative variants */}
        <pre
          sx={{
            backgroundColor: 'greens.0',
            p: 2,
            color: 'greens.4',
            mt: 0,
            mx: 0,
            mb: 3,
          }}
        >
          TODO: alert/toast: "This won't impact your credit score.
        </pre>
        <Button variant="primary">View my offer</Button>
      </Flex>
    </Flex>
  )
}
