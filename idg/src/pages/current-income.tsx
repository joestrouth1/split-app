/**@jsx jsx */
import { jsx, Flex, Container, Main } from 'theme-ui'
import { TextField, Button } from 'c-components'
import { useRef, FormEventHandler } from 'react'
import { DefaultLayout as Layout } from '../components/layouts'
import SEO from '../components/seo'

/**
 * Where applicants tell us how much they earn.
 */
const CurrentIncomePage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit: FormEventHandler = e => {
    /* TODO: Add validation and form submit navigation */
    e.preventDefault()
    console.log('submitted')
  }

  return (
    <Layout>
      <SEO title="Income" />
      <Main>
        <Container
          sx={{
            px: 3,
            py: 4,
            maxWidth: theme => theme.breakpoints[0],
            display: 'flex',
            flexFlow: 'column nowrap',
          }}
        >
          <header>
            <h1 sx={{ variant: 'type.title', mb: 4 }}>
              What&rsquo;s your current income?
            </h1>
          </header>
          <img
            src="https://placekitten.com/686/492"
            alt=""
            sx={{
              maxWidth: '100%',
              height: 'auto',
              mx: 'auto',
              mb: 4,
            }}
          />

          <form
            sx={{ display: 'flex', flexFlow: 'column nowrap' }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            {/* TODO: Income field variant with preceding $ icon and active state */}
            <TextField
              label="Individual annual income"
              hint="The total amount you make per year before taxes. Include tips, bonuses, and any other income you'd like to be considered for this loan"
              sx={{ mb: 3 }}
            />

            <Button variant="primary">Next</Button>
          </form>
        </Container>
      </Main>
    </Layout>
  )
}

export default CurrentIncomePage
