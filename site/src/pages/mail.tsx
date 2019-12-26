/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { FormEventHandler, useState } from 'react'
import { TextField, Button } from 'components'
import { navigate } from 'gatsby'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'

const handleSubmit: FormEventHandler = e => {
  e.preventDefault()
  navigate('/basic-information')
}

/** Where prescreened applicants confirm their mailed reservation offer and start applying */
const MailOfferPage = () => {
  const [reservationNumber, setReservationNumber] = useState('')
  const [lastFour, setLastFour] = useState('')

  return (
    <Layout>
      <SEO title="Start applying" />
      <Main>
        <Container
          sx={{
            px: 3,
            pt: 3,
            pb: 4,
            maxWidth: theme => theme.breakpoints[0],
          }}
        >
          <h1
            sx={{
              variant: 'type.title',
              mb: 3,
            }}
          >
            Claim your loan offer
          </h1>

          <form
            sx={{ display: 'flex', flexFlow: 'column nowrap' }}
            onSubmit={handleSubmit}
            data-testid="mail-reservation-form"
          >
            <TextField
              required
              label="Reservation number"
              name="reservation-number"
              type="text"
              inputMode="numeric"
              pattern="[0-9]{4,18}"
              maxLength={18}
              value={reservationNumber}
              onChange={e => setReservationNumber(e.target.value)}
              sx={{
                mb: 3,
              }}
              hint="Eighteen digits, on the mail you received"
            />

            <TextField
              required
              label="Last 4 digits of Social Security Number"
              name="last-four"
              type="text"
              inputMode="numeric"
              pattern="[0-9]{4}"
              maxLength={4}
              value={lastFour}
              onChange={e => setLastFour(e.target.value)}
              sx={{
                mb: 3,
              }}
            />

            <Button variant="primary" type="submit">
              Next
            </Button>
          </form>
        </Container>
      </Main>
    </Layout>
  )
}

export default MailOfferPage
