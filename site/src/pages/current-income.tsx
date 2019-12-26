/**@jsx jsx */
import { jsx, Container, Main, Flex } from 'theme-ui'
import { Button, CurrencyField, Select, DateField } from 'components'
import { useRef, useState, useEffect, Fragment, FormEventHandler } from 'react'
import { navigate } from 'gatsby'
import { DefaultLayout as Layout } from '../components/layouts'
import { Illustration } from '../components/illustration'
import { SEO } from '../components/seo'

interface PaySchedule {
  value: string
  label: string
  hint: string
}
const paySchedules: PaySchedule[] = [
  { value: 'weekly', label: 'Weekly', hint: 'e.g. every Friday' },
  { value: 'bi-weekly', label: 'Bi-weekly', hint: 'e.g. every other Friday' },
  { value: 'monthly', label: 'Monthly', hint: 'e.g. on the 1st of the month' },
  {
    value: 'semi-monthly',
    label: 'Semi-monthly',
    hint: 'e.g. on the 1st and 15th of the month',
  },
]

const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

/**
 * Where applicants tell us how much they earn.
 */
const CurrentIncomePage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()
    navigate('/verify-identity')
  }

  const [income, setIncome] = useState('')
  const [housing, setHousing] = useState('')
  const [paySchedule, setPaySchedule] = useState(paySchedules[0])
  const [nextPayDate, setNextPayDate] = useState('')
  const [firstMonthlyPayDate, setFirstMonthlyPayDate] = useState('1')
  const [secondMonthlyPayDate, setSecondMonthlyPayDate] = useState('15')

  const [isValid, setIsValid] = useState(false)
  useEffect(() => {
    setIsValid((formRef.current && formRef.current.checkValidity()) || false)
  }, [formRef.current, income, housing])

  const paidWeekly = paySchedule.value.match('weekly')
  const paidMonthly = paySchedule.value === 'monthly'
  const paidSemiMonthly = paySchedule.value === 'semi-monthly'

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
              height: 128,
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
              hint="Total amount you make per year before taxes. Include tips, bonuses, and any other income you&rsquo;d like to be considered for this loan"
              name="income"
              value={income}
              onChange={setIncome}
              sx={{ mb: 3 }}
            />

            <CurrencyField
              label="Housing payment"
              required
              hint="Total amount you pay per month for housing, e.g. rent or mortgage"
              name="housing"
              value={housing}
              onChange={setHousing}
              sx={{ mb: 3 }}
            />

            <Select
              label="Pay schedule"
              name="pay-schedule"
              sx={{ mb: 3 }}
              value={paySchedule.value}
              onChange={e =>
                setPaySchedule(
                  paySchedules.find(
                    ({ value }) => value === e.target.value
                  ) as PaySchedule
                )
              }
              hint={paySchedule.hint}
              required
            >
              {paySchedules.map(({ value, label }) => (
                <option value={value} key={value}>
                  {label}
                </option>
              ))}
            </Select>

            {/* 
              If paid [bi-]weekly, we need next pay date and typical weekday
             */}
            {paidWeekly && (
              <Fragment>
                <DateField
                  label="Next pay date"
                  name="next-pay-date"
                  type="date"
                  sx={{ mb: 3 }}
                  value={nextPayDate}
                  onChange={setNextPayDate}
                  hint="MM/DD/YYYY"
                  required
                />
                <Select
                  label="Day of the week you are usually paid"
                  sx={{
                    mb: 3,
                  }}
                  value={nextPayDate}
                  onChange={e => setNextPayDate(e.target.value)}
                >
                  {daysOfTheWeek.map(day => (
                    <option key={day} value={day.toLowerCase()}>
                      {day}
                    </option>
                  ))}
                </Select>
              </Fragment>
            )}

            {/* 
              If paid [semi-]monthly, we need the typical monthly pay date
             */}
            {paidMonthly && (
              <Fragment>
                <Select
                  label="Date you are usually paid"
                  sx={{
                    mb: 3,
                  }}
                  value={firstMonthlyPayDate}
                  onChange={e => setFirstMonthlyPayDate(e.target.value)}
                  required
                >
                  {[...Array(31).keys()].map(num => {
                    const date = num + 1
                    return (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    )
                  })}
                </Select>
              </Fragment>
            )}
            {paidSemiMonthly && (
              <Fragment>
                <Select
                  label="First date you are usually paid"
                  sx={{
                    mb: 3,
                  }}
                  value={firstMonthlyPayDate}
                  onChange={e => setFirstMonthlyPayDate(e.target.value)}
                  required
                >
                  {[...Array(31).keys()].map(num => {
                    const date = num + 1
                    return (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    )
                  })}
                </Select>
                <Select
                  label="Second date you are usually paid"
                  sx={{
                    mb: 3,
                  }}
                  value={secondMonthlyPayDate}
                  onChange={e => setSecondMonthlyPayDate(e.target.value)}
                  required
                >
                  {[...Array(31).keys()].map(num => {
                    const date = num + 1
                    return (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    )
                  })}
                </Select>
              </Fragment>
            )}
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
