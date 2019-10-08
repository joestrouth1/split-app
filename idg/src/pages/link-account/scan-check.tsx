/**@jsx jsx */
import { jsx, Main, Container } from 'theme-ui'
import { Icon } from 'c-components'
import { DefaultLayout as Layout } from '../../components/layouts'
import { SEO } from '../../components/seo'
import { Link } from 'gatsby'

const ScanCheckPage = () => (
  <Layout>
    <SEO title="Scan a check" />
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
          <h1 sx={{ variant: 'type.title', mb: 3 }}>Scan a check</h1>
          <p sx={{ variant: 'type.subtitle', mb: 3 }}>
            Save time and avoid tedious typing by snapping a photo of a check.
          </p>
        </header>
        <p sx={{ variant: 'type.body', mb: 3 }}>
          Please choose a clear photo that shows the front of the check with all
          four corners visible.
        </p>
        <div
          sx={{
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 180,
            borderStyle: 'dashed',
            borderWidth: 2,
            borderColor: 'grays.7',
            borderRadius: 4,
            mb: 3,
          }}
        >
          <Icon name="camera" alt="Camera" width={48} height={48} />
          <span sx={{ variant: 'type.subtitle', color: 'grays.7' }}>
            Add photo
          </span>
        </div>
        <Link
          to="/link-account/enter-details"
          state={{ account: '19284757201', routing: '982734945021' }}
          sx={{ variant: 'buttons.primary' }}
        >
          Next
        </Link>
      </Container>
    </Main>
  </Layout>
)

export default ScanCheckPage
