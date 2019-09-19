/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { Link } from 'gatsby'
import { DefaultLayout as Layout } from '../components/layouts'
import { Illustration } from '../components/illustration'
import { SEO } from '../components/seo'

/**
 * Congrats customer, you're pre-qual'd for up to X amt.
 */
const PrequalifiedPage = () => {
  return (
    <Layout>
      <SEO title="You're prequalified!" />
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
            <h1 sx={{ variant: 'type.title', mb: 3 }}>Nice!</h1>
            <p sx={{ variant: 'type.subtitle' }}>
              You&rsquo;re pre-qualified for up to:
            </p>
          </header>
        </Container>

        <Container
          sx={{
            maxWidth: theme => theme.breakpoints[0],
            display: 'flex',
            flexFlow: 'column nowrap',
            p: 0,
          }}
        >
          <Illustration
            sx={{
              height: 240,
              maxWidth: '100%',
            }}
          >
            <p sx={{ variant: 'type.title', fontWeight: 'bold' }}>$5,000</p>
            <p sx={{ variant: 'type.subtitle', color: 'greens.8' }}>
              (Illustrated amt.)
            </p>
          </Illustration>
        </Container>

        <Container
          sx={{
            px: 3,
            py: 4,
            maxWidth: theme => theme.breakpoints[0],
            display: 'flex',
            flexFlow: 'column nowrap',
          }}
        >
          <p
            sx={{
              variant: 'type.body',
            }}
          >
            Not interested in that amount? Let&rsquo;s keep going to see what we
            can do.
          </p>
          <p
            sx={{
              variant: 'type.body',
            }}
          >
            Next up, you&rsquo;ll need your bank details. Ready?
          </p>

          <Link
            sx={{ variant: 'buttons.primary', mt: 3 }}
            to="/verify-identity"
          >
            Let&rsquo;s go
          </Link>
        </Container>
      </Main>
    </Layout>
  )
}

export default PrequalifiedPage
