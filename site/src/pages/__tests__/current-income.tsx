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
    const housing = getByLabelText('Housing payment')
    const button = getByText('Next')

    act(() => {
      fireEvent.change(income, { target: { value: 23499 } })
      fireEvent.change(housing, { target: { value: 850 } })
    })

    expect(form).toBeValid()

    act(() => {
      fireEvent.click(button)
    })

    expect(navigate).toHaveBeenCalledTimes(1)
  })
})