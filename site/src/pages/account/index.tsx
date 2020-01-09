/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { DefaultLayout as Layout } from '../../components/layouts'
import { SEO } from '../../components/seo'

const AccountPage = () => {
  return (
    <Layout>
      <SEO title="Account" />
      <Main>
        <Container
          sx={{
            px: 3,
            pt: 3,
            pb: 0,
            maxWidth: theme => theme.breakpoints[0],
            display: 'flex',
            flexFlow: 'column nowrap',
            mb: 4,
          }}
        >
          <h1 sx={{ variant: 'type.title' }}>Account</h1>
        </Container>
      </Main>
    </Layout>
  )
}

export default AccountPage
