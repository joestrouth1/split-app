/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { Link } from 'gatsby'
import { Alert, Icon } from 'c-components'
import { DefaultLayout as Layout } from '../../components/layouts'
import { Illustration } from '../../components/illustration'
import { SEO } from '../../components/seo'

/**
 * Where applicants sign in to their bank account.
 */
const DecisionLogicPage = () => {
  return (
    <Layout>
      <SEO title="Sign in to your bank" />
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
            <h1 sx={{ variant: 'type.title', mb: 3 }}>Sign in to your bank</h1>
          </header>
          <Alert variant="positive" sx={{ mb: 3 }}>
            <Icon
              name="lightbulb"
              alt=""
              fill="greens.6"
              sx={{ mr: 2, flexShrink: 0 }}
              width={16}
              height={16}
            />
            <span>
              We can&rsquo;t see (and don&rsquo;t store) your login or password.
            </span>
          </Alert>
          <Illustration
            sx={{
              height: 350,
              mb: 3,
            }}
          >
            <p sx={{ variant: 'type.subtitle', fontWeight: 'bold' }}>
              Decision Logic
            </p>
          </Illustration>

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

export default DecisionLogicPage
