/**@jsx jsx */
import { jsx, Flex, Container, Main } from 'theme-ui'
import { Link } from 'gatsby'
import { Alert, Icon } from 'c-components'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'

/**
 * Confirmation screen for pre-qual applicants seeking a loan
 */
const CheckRatesPage = () => {
  return (
    <Layout>
      <SEO title="Check my rates" />
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
            <h1 sx={{ variant: 'type.title', mb: 4 }}>Making progress!</h1>
          </header>
          <img
            src="https://placekitten.com/514/538"
            alt=""
            sx={{
              maxWidth: '100%',
              height: 'auto',
              alignSelf: 'center',
              mb: 4,
            }}
          />

          <Flex sx={{ flexFlow: 'column nowrap' }}>
            <p
              sx={{
                variant: 'type.subtitle',
                mb: 3,
              }}
            >
              Let&rsquo;s see if you qualify.
            </p>
            <Alert variant="positive" sx={{ mb: 3 }}>
              <Icon
                name="lightbulb"
                alt=""
                fill="greens.6"
                sx={{ mr: 2 }}
                width={16}
                height={16}
              />
              <span>This won&rsquo;t impact your credit score.</span>
            </Alert>
            {/* TODO: replace this link with the proper destination */}
            <Link sx={{ variant: 'buttons.primary', mb: 4 }} to="/">
              View my offer
            </Link>
            <p sx={{ variant: 'type.disclaimer' }}>
              <small sx={{ variant: 'type.disclaimer' }}>
                Legalese: <br />
                By clicking the ‘Check my rates’ button and continuing with the
                application process, you are providing Express Written Consent
                under the Fair Credit Reporting Act for FancyCredit, LLC, to
                obtain your consumer credit report from your credit profile or
                other information from contract Credit Bureau(s) associated with
                your prequalification for credit inquiry. FancyCredit may also
                analyze your credit report data with parterns and/or affiliates
                to ensure you are being matched to products or services which
                are best suited to someone in your situation.
              </small>
            </p>
          </Flex>
        </Container>
      </Main>
    </Layout>
  )
}
export default CheckRatesPage
