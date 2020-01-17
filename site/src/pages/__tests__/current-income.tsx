/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render, act, fireEvent } from '../../test-utils'
import CurrentIncomePage from '../current-income'
import { navigate } from 'gatsby'

const Example = () => <CurrentIncomePage />

describe('Current income page', () => {
  it('Renders income field', () => {
    const { getByLabelText } = render(<Example />)
    expect(getByLabelText(/Individual annual income/)).toBeVisible()
  })

  it("Doesn't submit without entry", () => {
    const { getByTestId, getByText } = render(<Example />)
    const form = getByTestId('current-income-form')
    const button = getByText('Next')

    expect(form).toBeInvalid()

    act(() => {
      fireEvent.click(button)
    })

    expect(navigate).not.toHaveBeenCalled()
  })

  it('Submits with valid entry', () => {
    const { getByTestId, getByLabelText, getByText } = render(<Example />)
    const form = getByTestId('current-income-form')
    const income = getByLabelText('Individual annual income')
    const housing = getByLabelText(/Housing payment/gi)
    const paySchedule = getByLabelText(/Pay schedule/i)
    const weekDay = getByLabelText(/Day of the week/gi)
    const button = getByText('Next')
    act(() => {
      fireEvent.change(paySchedule, { target: { value: 'bi-weekly' } })
    })
    const nextPayDate = getByLabelText('Next pay date')

    act(() => {
      fireEvent.change(income, { target: { value: 23499 } })
      fireEvent.change(housing, { target: { value: 850 } })
      fireEvent.change(paySchedule, { target: { value: 'weekly' } })
      fireEvent.change(nextPayDate, { target: { value: '12251955' } })
      fireEvent.change(weekDay, { target: { value: 'friday' } })
    })

    expect(form).toBeValid()

    act(() => {
      fireEvent.click(button)
    })

    expect(navigate).toHaveBeenCalledTimes(1)
  })
})
