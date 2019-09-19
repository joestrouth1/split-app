/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { Button, Checkbox } from 'c-components'
import { useRef, FormEventHandler } from 'react'
import { navigate } from 'gatsby'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'

/**
 * Where applicants accept our policies.
 */
const DisclosuresPage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit: FormEventHandler = e => {
    /* TODO: Add validation and submit navigation */
    e.preventDefault()
    console.log(e.target, 'form submitted')
    navigate('/scoring')
  }

  return (
    <Layout>
      <SEO title="Review policies" />
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
            <h1 sx={{ variant: 'type.title', mb: 3 }}>Almost done!</h1>
            <p sx={{ variant: 'type.subtitle', mb: 4 }}>
              Please review and acknowledge the policies below.
            </p>
          </header>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexFlow: 'column nowrap',
            }}
          >
            <Checkbox>
              By checking this box, I agree to the terms and conditions set out
              in the Consent to Electronic Disclosure and Communication.
              Agreement
            </Checkbox>
            <Checkbox>
              By checking this box, I agree to the terms of the Privacy Policy.
            </Checkbox>
            <Checkbox>
              By checking this box, I acknowledge that I have read, understand
              and agree to the terms and conditions of the Agreements for
              Resolving Disputes which includes a binding arbitration agreement.
            </Checkbox>
            <Checkbox sx={{ my: 3 }}>
              By checking this box, I authorize{' '}
              <span sx={{ fontFamily: 'monospace' }}>brand</span> to the
              application terms outlined in the Consumer Credit Inquiry and
              Reporting Agreement.
            </Checkbox>
            <Button variant="primary">Next</Button>
          </form>
        </Container>
      </Main>
    </Layout>
  )
}

export default DisclosuresPage
