/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'

/**
 * Where customers setup 2-factor authentication.
 */
const SecureAccountPage = () => {
  return (
    <Layout>
      <SEO title="Secure your account" />
      <Main>
        <Container
          sx={{ px: 3, py: 4, maxWidth: theme => theme.breakpoints[0] }}
        >
          <header>
            <h1 sx={{ variant: 'type.title' }}>Secure your account</h1>
          </header>
        </Container>

        <Container sx={{ p: 0, maxWidth: theme => theme.breakpoints[0] }}>
          <img
            src="https://placekitten.com/g/1372/800"
            alt=""
            sx={{
              maxWidth: '100%',
              display: 'block',
              height: 'auto',
              mx: 'auto',
            }}
          />
        </Container>

        <Container
          sx={{ px: 3, py: 4, maxWidth: theme => theme.breakpoints[0] }}
        >
          <p sx={{ variant: 'type.body' }}>
            To keep your account extra safe, we recommend two-factor
            authentication.
          </p>

          <p sx={{ variant: 'type.body' }}>
            Whenever someone tries to access your account, we&rsquo;ll send you
            a notification with a secret code. You&rsquo;ll need to enter it to
            log in.
          </p>

          <p sx={{ variant: 'type.body' }}>
            How would you like to be notified?
          </p>

          <form sx={{ mb: 3 }}>
            {/* TODO: replace these with actual radio cards */}
            <pre>Radio group as Cards</pre>
          </form>
        </Container>
      </Main>
    </Layout>
  )
}
export default SecureAccountPage
