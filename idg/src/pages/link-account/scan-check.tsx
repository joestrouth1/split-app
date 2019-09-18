/**@jsx jsx */
import { jsx, Main, Container } from 'theme-ui'
import { DefaultLayout as Layout } from '../../components/layouts'
import { SEO } from '../../components/seo'
import { Illustration } from '../../components/illustration'
/* TODO: Add check scan page */
const ScanCheckPage = () => (
  <Layout>
    <SEO title="Scan a check" />
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
        <Illustration sx={{ height: 300, maxWidth: '100%' }} />
      </Container>
    </Main>
  </Layout>
)

export default ScanCheckPage
