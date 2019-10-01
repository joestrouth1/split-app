import React from 'react'
import { render, act, fireEvent } from '../test-utils'
import { CurrencyField } from './CurrencyField'

const LABEL = 'Individual annual income'
const HINT =
  'The total amount you make per year before taxes. Include tips, bonuses, and any other income you’d like to be considered for this loan.'
const BasicExample = () => <CurrencyField label={LABEL} hint={HINT} />

describe('CurrencyField renders', () => {
  it('label', () => {
    const { getByLabelText } = render(<BasicExample />)
    expect(getByLabelText(LABEL)).toBeVisible()
  })

  it('hint (string)', () => {
    const { getByText } = render(<BasicExample />)
    expect(getByText(HINT)).toBeVisible()
  })

  it('hint (custom)', () => {
    const Hint = (
      <div sx={{ display: 'flex' }}>
        <img src="https://placekitten.com/16/16" alt="" sx={{ mr: 1 }} />
        <span sx={{ flex: 1 }}>We take your privacy seriously.</span>
      </div>
    )

    const { getByText } = render(
      <CurrencyField label={LABEL} hint={Hint} sx={{ width: '100%' }} />
    )
    expect(getByText('We take your privacy seriously.')).toBeVisible()
  })
})

describe('CurrencyField validation', () => {
  it("doesn't accept letters", () => {
    const { getByLabelText } = render(<BasicExample />)
    const input = getByLabelText(LABEL) as HTMLInputElement
    const initialValue = input.value
    const TEST_VALUE = 'Two Two Four Eight Five Nine Nine Nine Nine'

    act(() => {
      fireEvent.change(input, { target: { value: TEST_VALUE } })
    })

    expect(input.value).toBe(initialValue)
  })

  it("doesn't accept additional special characters", () => {
    const { getByLabelText } = render(<BasicExample />)
    const input = getByLabelText(LABEL) as HTMLInputElement
    const initialValue = input.value
    const TEST_VALUE = `!@#$~\`%^&*()_+-={}[]|\\:";'<>,.?/`

    act(() => {
      fireEvent.change(input, { target: { value: TEST_VALUE } })
    })

    expect(input.value).toBe(initialValue)
  })

  it('accepts and formats numbers', () => {
    const handleChange = jest.fn()

    const { getByLabelText } = render(
      <CurrencyField label={LABEL} onChange={handleChange} />
    )
    const input = getByLabelText(LABEL) as HTMLInputElement
    const TEST_VALUE = '33654'

    act(() => {
      fireEvent.change(input, { target: { value: TEST_VALUE } })
    })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenLastCalledWith('$33,654')
  })

  it('accepts incomes precisely to the cent', () => {
    const handleChange = jest.fn()

    const { getByLabelText } = render(
      <CurrencyField label={LABEL} onChange={handleChange} />
    )
    const input = getByLabelText(LABEL) as HTMLInputElement
    const TEST_VALUE = '33654.491'

    act(() => {
      fireEvent.change(input, { target: { value: TEST_VALUE } })
    })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenLastCalledWith('$33,654.49')
  })

  it('is valid when enough digits are passed', () => {
    const { getByLabelText } = render(<CurrencyField label={LABEL} />)
    const input = getByLabelText(LABEL) as HTMLInputElement
    const TEST_VALUE = '33654'

    act(() => {
      fireEvent.change(input, { target: { value: TEST_VALUE } })
    })

    expect(input).toBeValid()
  })

  it('is invalid when insufficient digits are passed', () => {
    const { getByLabelText } = render(<CurrencyField label={LABEL} />)
    const input = getByLabelText(LABEL) as HTMLInputElement
    const TEST_VALUE = '0'

    act(() => {
      fireEvent.change(input, { target: { value: TEST_VALUE } })
    })

    expect(input).toBeInvalid()
  })
})
