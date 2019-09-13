/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { TextField } from '../../TextField'
import { Button } from '../../Button'

/**
 * Where applicants tell us how much they earn.
 * @visibleName Income assessment
 */
export const CurrentIncome = () => {
  return (
    <main>
      <header sx={{ px: 3, pt: 4 }}>
        <h1 sx={{ variant: 'type.title', mb: 4 }}>
          What's your current income?
        </h1>
      </header>
      <img
        src="https://placebear.com/343/246"
        alt=""
        sx={{
          maxWidth: '100%',
          height: 'auto',
          mx: 'auto',
          mb: 4,
        }}
      />

      <Flex as="form" sx={{ px: 3, pb: 4, m: 0, flexFlow: 'column nowrap' }}>
        {/* TODO: Income field variant with preceding $ icon and active state */}
        <TextField
          label="Individual annual income"
          hint="The total amount you make per year before taxes. Include tips, bonuses, and any other income you'd like to be considered for this loan"
          sx={{ mb: 3 }}
        />

        <Button variant="primary">Next</Button>
      </Flex>
    </main>
  )
}
