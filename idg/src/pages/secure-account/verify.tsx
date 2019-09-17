/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { parse } from 'query-string'
import { DefaultLayout as Layout } from '../../components/layouts'
import { SEO } from '../../components/seo'

interface SecureAccountVerificationPageProps {
  location: Location
}

/**
 * Where customers confirm the code they received for 2FA.
 */
const SecureAccountVerificationPage = ({
  location,
}: SecureAccountVerificationPageProps) => {
  /* TODO: detect ?method=[sms,email] */
  /* 
    If method=sms, get the # they entered and confirm that's where we should send their code.
    - This will require adding some form of global context and/or storing that info in local/session storage.
  */
  /**
   * Add text field for code entry, button to submit code that's disabled until input is of length n
   * Add failure state - conditionally render a negative alert if code is invalid
   * Add success state - render a positive alert for n milliseconds, then navigate to next page
   * Add worst case scenario - if failureCount >= 5(?), stop displaying input, render negative alert, and links to contact us and/or resend their code
   */

  const parsedQueryString = parse(location.search)
  const { method = '' } = parsedQueryString

  return (
    <Layout>
      <SEO title="Enter your verification code" />
      <Main>
        <Container
          sx={{ px: 3, py: 4, maxWidth: theme => theme.breakpoints[0] }}
        >
          <header>
            <h1 sx={{ variant: 'type.title' }}>Secure your account</h1>
            <pre>{method}</pre>
          </header>
        </Container>
      </Main>
    </Layout>
  )
}
export default SecureAccountVerificationPage
