/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { DefaultLayout as Layout } from '../../components/layouts'
import { SEO } from '../../components/seo'

const AutoPayPage = () => {
  return (
    <Layout>
      <SEO title="Auto Pay - Account" />
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
          <h1 sx={{ variant: 'type.title' }}>Auto pay</h1>
        </Container>
      </Main>
    </Layout>
  )
}

export default AutoPayPage
