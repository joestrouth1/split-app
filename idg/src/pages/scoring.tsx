/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { useRef, FormEventHandler } from 'react'
import { Icon } from 'c-components'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
import { Illustration } from '../components/illustration'

/**
 * Where applicants wait while we score them.
 */
const ScoringPage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit: FormEventHandler = e => {
    /* TODO: Add validation and submit navigation */
    e.preventDefault()
    console.log(e.target, 'form submitted')
  }

  return (
    <Layout>
      <SEO title="Looking for loan options" />
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
            <h1 sx={{ variant: 'type.title', mb: 4 }}>Working on it...</h1>
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
          <p sx={{ variant: 'type.subtitle', mb: 3 }}>
            We’re creating the best loan option for you.
          </p>

          <p sx={{ variant: 'type.body' }}>
            This might take a couple of minutes but we’ll be quick—please don’t
            close or refresh the page! How’s the application going?
          </p>
          <p sx={{ variant: 'type.body', my: 3 }}>
            How&rsquo;s the application going?
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
            }}
          >
            <button
              sx={{
                variant: 'cards.radio',
                mr: 2,
                flex: 1,
                display: 'flex',
                flexFlow: 'column nowrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon name="frown" alt="Negative:" width={24} height={24} />
              <span sx={{ variant: 'type.body' }}>Poor</span>
            </button>
            <button
              sx={{
                variant: 'cards.radio',
                flex: 1,
                mr: 2,
                display: 'flex',
                flexFlow: 'column nowrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon name="meh" alt="Neutral:" width={24} height={24} />
              <span sx={{ variant: 'type.body' }}>OK</span>
            </button>
            <button
              sx={{
                variant: 'cards.radio',
                flex: 1,
                display: 'flex',
                flexFlow: 'column nowrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon name="smile" alt="Positive:" width={24} height={24} />
              <span sx={{ variant: 'type.body' }}>Good</span>
            </button>
          </form>
        </Container>
      </Main>
    </Layout>
  )
}

export default ScoringPage
