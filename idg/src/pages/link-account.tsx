/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { DefaultLayout as Layout } from '../components/layouts'
import SEO from '../components/seo'
import { useRef, FormEventHandler } from 'react'

/**
 * Where applicants give us their bank acct. info
 */
const LinkAccountPage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit: FormEventHandler = e => {
    /* TODO: Add validation, disabled checks, navigation */
    e.preventDefault()
    console.log('submitted')
  }

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

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexFlow: 'column nowrap',
            }}
          >
            {/* TODO: replace these with radio Cards */}
            <pre>Radio button Card group</pre>
          </form>
        </Container>
      </Main>
    </Layout>
  )
}

export default LinkAccountPage
