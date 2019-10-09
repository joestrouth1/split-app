/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { Link } from 'gatsby'
import { useState, FormEventHandler } from 'react'
import { SplashLayout as Layout } from '../components/layouts'
import { TextField, Button } from 'c-components'
import { SEO } from '../components/seo'

/* TODO: Validate and navigate to account summary page */
const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
  e.preventDefault()
  alert('Account summary is a work in progress.')
}

export const IndexPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <Layout>
      <SEO title="Table of Contents" />
      <Main sx={{ display: 'flex' }}>
        <Container
          sx={{
            p: 0,
            px: 3,
            maxWidth: theme => theme.breakpoints[0],
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
          }}
        >
          <h1 sx={{ variant: 'type.title', mb: 3, textAlign: 'center' }}>
            Welcome!
          </h1>

          <form
            sx={{ display: 'flex', flexFlow: 'column nowrap', mb: 2 }}
            onSubmit={handleSubmit}
          >
            <TextField
              name="email"
              type="email"
              label="Email address"
              autoComplete="email"
              required
              onChange={e => setEmail(e.currentTarget.value)}
              value={email}
              sx={{
                mb: 3,
              }}
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              autoComplete="current-password"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
              sx={{
                mb: 3,
              }}
            />

            <Button type="submit" variant="primary">
              Sign in
            </Button>
          </form>

          <Link to="/basic-information" sx={{ variant: 'buttons.outline' }}>
            Apply now
          </Link>
        </Container>
      </Main>
    </Layout>
  )
}

export default IndexPage
