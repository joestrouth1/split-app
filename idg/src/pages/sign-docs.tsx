/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { Card, Icon, Button } from 'c-components'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'

/**
 * Read and sign loan docs (Agreement, OLPA, etc)
 */
const SignDocsPage = () => {
  return (
    <Layout>
      <SEO title="Sign loan documents" />
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
            <h1 sx={{ variant: 'type.title', mb: 3 }}>
              Read and sign your loan documents
              <br />
              [WIP]
            </h1>
          </header>

          <Card
            variant="default"
            sx={{
              display: 'flex',
              flexFlow: 'column nowrap',
              pt: 3,
              pb: 2,
              mb: 3,
            }}
          >
            {/* Card title */}
            <p
              sx={{
                variant: 'type.body',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Loan Agreement
            </p>
            {/* Doc window */}
            <div
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'auto',
                maxWidth: `calc(311px - 16px)`,
                height: 344,
                mx: 'auto',
              }}
            >
              TILA
            </div>
            {/* Actions */}
            <div
              sx={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'space-between',
              }}
            >
              <Button
                variant="base"
                sx={{
                  bg: 'transparent',
                  p: 2,
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: `1 0 auto`,
                }}
              >
                <Icon
                  name="expand"
                  alt=""
                  width={16}
                  height={16}
                  sx={{ mr: 2 }}
                />
                <span sx={{ variant: 'type.body' }}>Expand</span>
              </Button>
              <Button
                variant="base"
                sx={{
                  bg: 'transparent',
                  p: 2,
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: `1 0 auto`,
                }}
              >
                <Icon
                  name="print"
                  alt=""
                  width={16}
                  height={16}
                  sx={{ mr: 2 }}
                />
                <span sx={{ variant: 'type.body' }}>Print</span>
              </Button>
              <Button
                variant="base"
                sx={{
                  bg: 'transparent',
                  p: 2,
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: `1 0 auto`,
                }}
              >
                <Icon
                  name="save"
                  alt=""
                  width={16}
                  height={16}
                  sx={{ mr: 2 }}
                />
                <span sx={{ variant: 'type.body' }}>Save</span>
              </Button>
            </div>
          </Card>
        </Container>
      </Main>
    </Layout>
  )
}

export default SignDocsPage
