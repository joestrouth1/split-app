/**@jsx jsx */
import { jsx, Main, Container } from 'theme-ui'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'

const LoanOptionsPage = () => {
  return (
    <Layout>
      <SEO title="You're approved - Select your loan" />
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
            <h1
              sx={{
                variant: 'type.title',
                mb: 3,
              }}
            >
              You&rsquo;re approved!
            </h1>
            <p sx={{ variant: 'type.subtitle', mb: 4 }}>
              Customize your loan by selecting an amount and term that fit your
              needs.
            </p>
          </header>
        </Container>
      </Main>
    </Layout>
  )
}

export default LoanOptionsPage
