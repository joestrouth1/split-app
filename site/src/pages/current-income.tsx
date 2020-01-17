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
  const [monthlyPayDate, setMonthlyPayDate] = useState('1')
  const [monthlyPayDates, setMonthlyPayDates] = useState('1-15')

  // Make sure that annual income is not unusually low, or monthly housing payment is not unusually high
  const [incomeWarning, setIncomeWarning] = useState<string>()
  const [housingWarning, setHousingWarning] = useState<string>()
  function testIncomeValue() {
    const incomeMatches = income.match(/[\d.]*/g) || []
    const incomeValue = incomeMatches.join('')
    if (parseFloat(incomeValue || '') < 10_000) {
      console.log('blurred')
      setIncomeWarning(
        'That number seems low. Please verify that your individual annual income is correct before proceeding.'
      )
    } else {
      setIncomeWarning(undefined)
    }
  }
  function testHousingValue() {
    const housingMatches = housing.match(/[\d.]*/g) || []
    const housingValue = housingMatches.join('')
    if (parseFloat(housingValue || '') > 10_000) {
      console.log('blurred')
      setHousingWarning(
        'That number seems high. Please verify that your monthly housing payment is correct before proceeding.'
      )
    } else {
      setHousingWarning(undefined)
    }
  }

  const [isValid, setIsValid] = useState(false)
  useEffect(() => {
    setIsValid((formRef.current && formRef.current.checkValidity()) || false)
  }, [
    formRef.current,
    income,
    housing,
    paySchedule,
    nextPayDate,
    monthlyPayDate,
    monthlyPayDates,
  ])

  const paidWeekly = paySchedule.value === 'weekly'
  const paidBiWeekly = paySchedule.value === 'bi-weekly'
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
            sx={{ display: 'flex', flexFlow: 'column nowrap', mb: 3 }}
            ref={formRef}
            onSubmit={handleSubmit}
            data-testid="current-income-form"
          >
            {/* TODO: Income field variant with preceding $ icon and active state */}
            <CurrencyField
              label="Individual annual income"
              required
              hint={
                <span>
                  <strong>
                    Total amount you make per year{' '}
                    <em
                      sx={{ fontStyle: 'normal', textDecoration: 'underline' }}
                    >
                      before taxes
                    </em>
                    .
                  </strong>{' '}
                  Include tips, bonuses, and any other income you&rsquo;d like
                  to be considered for this loan<sup>*</sup>
                </span>
              }
              name="income"
              value={income}
              onChange={setIncome}
              sx={{ mb: 3 }}
              warning={incomeWarning}
              onBlur={testIncomeValue}
            />

            <CurrencyField
              label="Monthly housing payment"
              required
              hint="Total amount you pay per month for housing (rent or mortgage)"
              name="housing"
              value={housing}
              onChange={setHousing}
              sx={{ mb: 3 }}
              warning={housingWarning}
              onBlur={testHousingValue}
            />

            <Select
              label="Primary pay schedule"
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
              If paid weekly, we need [next pay date] and typical weekday
             */}
            {paidWeekly && (
              <Fragment>
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
              If paid bi-weekly, we need next pay date and typical weekday
             */}
            {paidBiWeekly && (
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
                  value={monthlyPayDate}
                  onChange={e => setMonthlyPayDate(e.target.value)}
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
                  label="Dates you are usually paid"
                  sx={{
                    mb: 3,
                  }}
                  value={monthlyPayDates}
                  onChange={e => setMonthlyPayDates(e.target.value)}
                  required
                >
                  <option value="1-15">1st and 15th</option>
                  <option value="5-20">5th and 20th</option>
                  <option value="7-22">7th and 22nd</option>
                  <option value="10-25">10th and 25th</option>
                  <option value="15-last">
                    15th and last day of the month
                  </option>
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
          <p sx={{ variant: 'type.disclaimer' }}>
            <sup>*</sup>Alimony, child support, or separate maintenance income
            need not be revealed if you do not wish it to be considered as a
            basis for repaying this obligation.
          </p>
        </Container>
      </Main>
    </Layout>
  )
}

export default CurrentIncomePage
