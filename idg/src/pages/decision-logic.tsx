/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { Link } from 'gatsby'
import { DefaultLayout as Layout } from '../components/layouts'
import SEO from '../components/seo'

/**
 * Where applicants tell us how much they earn.
 */
const CurrentIncomePage = () => {
  return (
    <Layout>
      <SEO title="Sign in to your bank" />
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
            <h1 sx={{ variant: 'type.title', mb: 4 }}>Sign in to your bank</h1>
          </header>
          <img
            src="https://placekitten.com/686/700"
            alt=""
            sx={{
              maxWidth: '100%',
              height: 'auto',
              mx: 'auto',
              mb: 3,
            }}
          />

          <p
            sx={{
              variant: 'type.body',
              mb: 3,
            }}
          >
            Well this is embarrassing, is your bank not listed? You can always
            go back and enter your account details manually.
          </p>

          <p sx={{ variant: 'type.disclaimer', mt: 0, mb: 3 }}>
            <small sx={{ variant: 'type.disclaimer' }}>
              Bank sign in is provided by Decision Logic, a third party. By
              using the service you agree to their terms of service.
            </small>
          </p>
          <Link to="/link-account" sx={{ variant: 'buttons.outline' }}>
            Go back
          </Link>
        </Container>
      </Main>
    </Layout>
  )
}

export default CurrentIncomePage
