/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { MouseEventHandler, useState, Fragment, useEffect } from 'react'
import { Icon } from 'c-components'
import { navigate } from 'gatsby'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
import { Illustration } from '../components/illustration'

type Rating = 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE'

const ThankYouMessage = () => (
  <p sx={{ variant: 'type.body', my: 3 }}>
    Thank you for sharing how you feel.
  </p>
)

function getScoreAndNavigate() {
  if (typeof window !== 'undefined') {
    const goodScore = confirm(
      'Did the applicant score well?\nOK for yes, Cancel for no.'
    )
    if (goodScore) {
      navigate('/link-account')
    } else {
      navigate('/income-details')
    }
  }
}

/**
 * Where applicants wait while we score them.
 */
const ScoringPage = () => {
  const [feedback, setFeedback] = useState<Rating | null>(null)
  const handleFeedback = (
    rating: Rating
  ): MouseEventHandler<HTMLButtonElement> => (): void => {
    /* TODO: Add feedback, thank you, and submit navigation */
    console.log(`User rated the application: ${rating}`)
    setFeedback(rating)
  }
  useEffect(() => {
    if (feedback) {
      setTimeout(getScoreAndNavigate, 1500)
    }
  }, [feedback])

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
            <h1 sx={{ variant: 'type.title', mb: 4 }}>
              We’re creating the best loan option for you.
            </h1>
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

          <p sx={{ variant: 'type.body' }}>
            This might take a couple of minutes but we’ll be quick—please don’t
            close or refresh the page!
          </p>
          {feedback ? (
            <ThankYouMessage />
          ) : (
            <Fragment>
              <p sx={{ variant: 'type.body', my: 3 }}>
                How’s the application going?
              </p>
              <div
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
                  onClick={handleFeedback('NEGATIVE')}
                >
                  <Icon
                    name="frown"
                    alt="Frowning face."
                    width={24}
                    height={24}
                  />
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
                  onClick={handleFeedback('NEUTRAL')}
                >
                  <Icon name="meh" alt="Neutral face." width={24} height={24} />
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
                  onClick={handleFeedback('POSITIVE')}
                >
                  <Icon
                    name="smile"
                    alt="Smiling face."
                    width={24}
                    height={24}
                  />
                  <span sx={{ variant: 'type.body' }}>Good</span>
                </button>
              </div>
            </Fragment>
          )}
        </Container>
      </Main>
    </Layout>
  )
}

export default ScoringPage
