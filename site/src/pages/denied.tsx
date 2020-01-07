/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'

/**
 * Sorry.
 */
const DeniedPage = () => {
  return (
    <Layout>
      <SEO title="Loan denied" />
      <Main>
        <Container
          sx={{
            px: 3,
            pt: 3,
            pb: 4,
            maxWidth: theme => theme.breakpoints[0],
            display: 'flex',
            flexFlow: 'column nowrap',
          }}
        >
          <header>
            <h1 sx={{ variant: 'type.title', mb: 3 }}>
              Your application was denied
            </h1>
          </header>
          <p sx={{ variant: 'type.body', mb: 3 }}>
            Your application was carefully evaluated, but unfortunately we
            cannot approve you for a loan at this time.
          </p>
          <p sx={{ variant: 'type.body' }}>
            We will send a notice of our decision to the email address
            associated with your account within the next 24 hours.
          </p>
        </Container>
      </Main>
    </Layout>
  )
}

export default DeniedPage
