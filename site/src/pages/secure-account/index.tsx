/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { Link } from 'gatsby'
import { Icon } from 'components'
import { DefaultLayout as Layout } from '../../components/layouts'
import { Illustration } from '../../components/illustration'
import { SEO } from '../../components/seo'

/**
 * Where customers setup 2-factor authentication.
 */
const SecureAccountPage = () => {
  return (
    <Layout>
      <SEO title="Secure your account" />
      <Main>
        <Container
          sx={{
            px: 3,
            pt: 3,
            pb: 4,
            maxWidth: theme => theme.breakpoints[0],
          }}
        >
          <header>
            <h1 sx={{ variant: 'type.title' }}>Secure your account</h1>
          </header>
        </Container>

        <Container sx={{ p: 0, maxWidth: theme => theme.breakpoints[0] }}>
          <Illustration
            sx={{
              height: 250,
              maxWidth: '100%',
            }}
          >
            <p sx={{ variant: 'type.subtitle', fontWeight: 'bold' }}>
              Security illustration
            </p>
          </Illustration>
        </Container>

        <Container
          sx={{ px: 3, py: 4, maxWidth: theme => theme.breakpoints[0] }}
        >
          <p sx={{ variant: 'type.body', mb: 3 }}>
            To keep your account safe, we need to verify your contact
            information.
          </p>

          <p sx={{ variant: 'type.body', mb: 3 }}>How should we reach you?</p>

          <div sx={{ display: 'flex', flexFlow: 'row nowrap' }}>
            <Link
              to="/secure-account/verify-contact?method=sms"
              sx={{
                variant: 'cards.radio',
                display: 'flex',
                flex: 1,
                flexFlow: 'column nowrap',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'grays.9',
                mr: 2,
              }}
            >
              <Icon name="comments" alt="" fill="primary" />
              <span>Text me</span>
            </Link>
            <Link
              to="/secure-account/verify-contact?method=email"
              sx={{
                variant: 'cards.radio',
                display: 'flex',
                flex: 1,
                flexFlow: 'column nowrap',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'grays.9',
              }}
            >
              <Icon name="envelope" alt="" fill="primary" />
              <span>Email me</span>
            </Link>
          </div>
        </Container>
      </Main>
    </Layout>
  )
}
export default SecureAccountPage
