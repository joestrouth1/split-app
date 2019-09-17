/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { Link } from 'c-components'
import { SEO } from '../components/seo'
import { DefaultLayout as Layout } from '../components/layouts'

const ScanIdPage = () => {
  return (
    <Layout>
      <SEO title="Scan your ID" />
      <Main>
        <Container
          sx={{ px: 3, py: 4, maxWidth: theme => theme.breakpoints[0] }}
        >
          <header>
            <h1 sx={{ variant: 'type.title', mb: 3 }}>Scan your ID card</h1>
            <p sx={{ variant: 'type.subtitle', mb: 3 }}>
              Save time and secure your account by uploading a picture of your
              ID.
            </p>
          </header>
          <p sx={{ variant: 'type.body' }}>
            We&rsquo;ll use your card to fill out some of the application for
            you, as well as to protect against fraud.
          </p>

          <p sx={{ variant: 'type.body' }}>What type of ID card do you have?</p>

          <form sx={{ mb: 3 }}>
            <pre>Radio group as Cards</pre>
          </form>

          <p sx={{ variant: 'type.body' }}>
            Don&rsquo;t have an ID card? You can{' '}
            <Link href="">enter your information manually.</Link>
          </p>
        </Container>
      </Main>
    </Layout>
  )
}

export default ScanIdPage
