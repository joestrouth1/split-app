/**@jsx jsx */
import { jsx, Flex, Container, Main } from 'theme-ui'
import { Button, TextField } from 'c-components'
import Link from '../components/link'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'

/**
 * Where applicants give us their SSN and DOB.
 */
const VerifyIdentityPage = () => {
  return (
    <Layout>
      <SEO title="Verify your identity" />
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
            <h1 sx={{ variant: 'type.title', mb: 3 }}>Verify your identity</h1>
          </header>

          <p
            sx={{
              variant: 'type.body',
              mb: 3,
            }}
          >
            <img
              src="https://placekitten.com/16/16"
              alt="Security lock"
              sx={{
                display: 'inline-block',
                mr: 1,
              }}
            />
            Your information is encrypted and held securely according to{' '}
            <Link to="/privacy-policy" sx={{ variant: 'links.default' }}>
              our privacy policy
            </Link>
            .
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
            <TextField label="Date of birth" type="date" sx={{ mb: 3 }} />

            <Button variant="primary">Next</Button>
          </Flex>
        </Container>
      </Main>
    </Layout>
  )
}

export default VerifyIdentityPage
