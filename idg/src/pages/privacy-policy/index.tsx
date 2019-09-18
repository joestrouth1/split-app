/**@jsx jsx */
import { jsx, Main, Container } from 'theme-ui'
import { DefaultLayout as Layout } from '../../components/layouts'
import { SEO } from '../../components/seo'
import ModalVersion from './modal'

const PrivacyPolicyPage = () => (
  <Layout>
    <SEO title="Basic info" />
    <Main>
      <Container sx={{ px: 3, py: 4, maxWidth: theme => theme.breakpoints[0] }}>
        <ModalVersion />
      </Container>
    </Main>
  </Layout>
)

export default PrivacyPolicyPage
