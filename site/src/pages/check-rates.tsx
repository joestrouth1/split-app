/**@jsx jsx */
import { jsx, Flex, Container, Main } from 'theme-ui'
import { Link } from 'gatsby'
import { Alert, Icon } from 'components'
import { DefaultLayout as Layout } from '../components/layouts'
import { Illustration } from '../components/illustration'
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
            pt: 3,
            pb: 4,
            maxWidth: theme => theme.breakpoints[0],
            display: 'flex',
            flexFlow: 'column nowrap',
          }}
        >
          <header>
            <h1 sx={{ variant: 'type.title', mb: 4 }}>Making progress!</h1>
          </header>
          <Illustration
            sx={{
              height: 240,
              maxWidth: '100%',
              mb: 4,
            }}
          >
            <p sx={{ variant: 'type.subtitle', fontWeight: 'bold' }}>
              Illustration
            </p>
          </Illustration>

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
                sx={{ mr: 2, flexShrink: 0 }}
                width={24}
                height={24}
              />
              <span>This won&rsquo;t impact your credit score.</span>
            </Alert>
            {/* TODO: replace this link with the proper destination */}
            <Link sx={{ variant: 'buttons.primary', mb: 4 }} to="/prequalified">
              View my options
            </Link>
            <p sx={{ variant: 'type.disclaimer', m: 0 }}>
              <small sx={{ variant: 'type.disclaimer' }}>
                Legalese: <br />
                By clicking the &lsquo;View my options&rsquo; button and
                continuing with the application process, you are providing
                Express Written Consent under the Fair Credit Reporting Act for
                Verge Credit to obtain your consumer credit report from your
                credit profile or other information from contract Credit
                Bureau(s) associated with your prequalification for credit
                inquiry. Verge Credit may also analyze your credit report data
                with patterns and/or affiliates to ensure you are being matched
                to products or services which are best suited to someone in your
                situation.
              </small>
            </p>
          </Flex>
        </Container>
      </Main>
    </Layout>
  )
}
export default CheckRatesPage
