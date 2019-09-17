/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { Link } from 'gatsby'
import { Alert, Icon } from 'c-components'
import { SEO } from '../../components/seo'
import { DefaultLayout as Layout } from '../../components/layouts'

const ScanIdPhotosPage = () => {
  return (
    <Layout>
      <SEO title="Scan your ID" />
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
            <h1 sx={{ variant: 'type.title', mb: 3 }}>Scan your ID card</h1>
            <p sx={{ variant: 'type.subtitle', mb: 3 }}>
              Save time and secure your account by uploading a picture of your
              ID.
            </p>
          </header>
          <p sx={{ variant: 'type.body', mb: 3 }}>
            Please choose clear photos that show all four corners, front and
            back.
          </p>

          {/* TODO: add dropzone / tap to add photo */}
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
              mb: 2,
            }}
          >
            <Icon name="camera" alt="Camera" width={48} height={48} />
            <span sx={{ variant: 'type.subtitle', color: 'grays.7' }}>
              Add photo
            </span>
          </div>
          <div sx={{ mb: 3 }}>
            <Alert variant="negative" sx={{ mb: 2 }}>
              <Icon
                name="times"
                fill="red"
                alt="Error"
                width={24}
                height={24}
                sx={{ mr: 2 }}
              />
              <span>Front photo not added</span>
            </Alert>

            <Alert variant="negative">
              <Icon
                name="times"
                fill="red"
                alt="Error"
                width={24}
                height={24}
                sx={{ mr: 2 }}
              />
              <span>Back photo not added</span>
            </Alert>
          </div>

          {/* TODO: add photo preview/removal cards and alert state logic */}

          <Link
            sx={{ variant: 'buttons.primary' }}
            to="/residential-information"
          >
            Next
          </Link>
        </Container>
      </Main>
    </Layout>
  )
}

export default ScanIdPhotosPage
