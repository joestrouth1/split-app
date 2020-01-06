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
            <h1 sx={{ variant: 'type.title', mb: 3 }}>Loan denied</h1>
          </header>
          <p sx={{ variant: 'type.body' }}>
            Unfortunately we&rsquo;re unable to grant your request for a loan at
            this time.
          </p>
        </Container>
      </Main>
    </Layout>
  )
}

export default DeniedPage
