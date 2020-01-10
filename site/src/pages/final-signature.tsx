/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { TextField, Button } from 'components'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
import { useState, FormEventHandler, ChangeEventHandler } from 'react'
import { navigate } from 'gatsby'

const FinalSignaturePage = () => {
  const [signature, setSignature] = useState('')
  const isValid = signature != null

  const updateSignature: ChangeEventHandler<HTMLInputElement> = e => {
    setSignature(e.target.value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    if (isValid) {
      navigate('/loan-complete')
    } else {
      e.currentTarget.reportValidity()
    }
  }

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
              Last step; your signature
            </h1>
          </header>

          <form
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexFlow: 'column nowrap',
            }}
          >
            <TextField
              label="Your name, as we have it"
              autoComplete="name"
              name="signature"
              value={signature}
              onChange={updateSignature}
              required
              sx={{
                mb: 3,
              }}
            />
            <Button type="submit" variant="primary">
              Complete loan
            </Button>
          </form>
        </Container>
      </Main>
    </Layout>
  )
}

export default FinalSignaturePage
