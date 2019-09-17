/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { Button } from 'c-components'
import { DefaultLayout as Layout } from '../components/layouts'
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
          <img
            src="https://placekitten.com/622/480"
            alt="However much they're qualified for"
            sx={{
              maxWidth: '100%',
              height: 'auto',
              alignSelf: 'center',
            }}
          />
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
              mb: 3,
            }}
          >
            Not interested in that amount? Let&rsquo;s keep going to see what we
            can do.
          </p>
          <p
            sx={{
              variant: 'type.body',
              mb: 3,
            }}
          >
            Next up, you&rsquo;ll need your bank details. Ready?
          </p>

          <Button variant="primary">Let&rsquo;s go</Button>
        </Container>
      </Main>
    </Layout>
  )
}

export default PrequalifiedPage
