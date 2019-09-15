/**@jsx jsx */
import { jsx, Flex, Container, Main } from 'theme-ui'
import { DefaultLayout as Layout } from '../components/layouts'
import SEO from '../components/seo'

/**
 * Where applicants give us their bank acct. info
 */
const LinkAccountPage = () => {
  return (
    <Layout>
      <SEO title="Link your bank account" />
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
            <h1 sx={{ variant: 'type.title', mb: 3 }}>
              Link your bank account
            </h1>
            <p sx={{ variant: 'type.subtitle', mb: 3 }}>
              Accepting a loan from us means we&rsquo;ll send your money to your
              bank account.
            </p>
          </header>

          <p
            sx={{
              variant: 'type.body',
              mb: 3,
            }}
          >
            Simply sign in with your online banking credentials (fastest option)
            or enter your routing and account numbers manually.
          </p>

          <Flex
            as="form"
            sx={{
              flexFlow: 'column nowrap',
            }}
          >
            {/* TODO: replace these with radio Cards */}
            <pre>Radio button Card group</pre>
          </Flex>
        </Container>
      </Main>
    </Layout>
  )
}

export default LinkAccountPage
