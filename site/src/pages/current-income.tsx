/**@jsx jsx */
import { jsx, Container, Main, Flex } from 'theme-ui'
import { CurrencyField, Button } from 'components'
import { useRef, useState, useEffect, FormEventHandler } from 'react'
import { navigate } from 'gatsby'
import { DefaultLayout as Layout } from '../components/layouts'
import { Illustration } from '../components/illustration'
import { SEO } from '../components/seo'

/**
 * Where applicants tell us how much they earn.
 */
const CurrentIncomePage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()
    navigate('/check-rates')
  }

  const [income, setIncome] = useState<string>('')

  const [isValid, setIsValid] = useState<boolean>(false)
  useEffect(() => {
    setIsValid((formRef.current && formRef.current.checkValidity()) || false)
  }, [formRef.current, income])

  return (
    <Layout>
      <SEO title="Income" />
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
            <h1 sx={{ variant: 'type.title', mb: 4 }}>
              What&rsquo;s your current income?
            </h1>
          </header>
          <Illustration
            sx={{
              height: 245,
              maxWidth: '100%',
              mb: 4,
            }}
          >
            <p sx={{ variant: 'type.subtitle', fontWeight: 'bold' }}>
              Illustration
            </p>
          </Illustration>

          <form
            sx={{ display: 'flex', flexFlow: 'column nowrap' }}
            ref={formRef}
            onSubmit={handleSubmit}
            data-testid="current-income-form"
          >
            {/* TODO: Income field variant with preceding $ icon and active state */}
            <CurrencyField
              label="Individual annual income"
              required
              hint="The total amount you make per year before taxes. Include tips, bonuses, and any other income you&rsquo;d like to be considered for this loan."
              name="income"
              value={income}
              onChange={setIncome}
              sx={{ mb: 3 }}
            />

            <Flex
              onClick={() =>
                !isValid && formRef.current && formRef.current.reportValidity()
              }
            >
              <Button
                disabled={!isValid}
                variant="primary"
                type="submit"
                sx={{ flex: 1 }}
              >
                Next
              </Button>
            </Flex>
          </form>
        </Container>
      </Main>
    </Layout>
  )
}

export default CurrentIncomePage
