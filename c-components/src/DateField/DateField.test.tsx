import React from 'react'
import { render, act, fireEvent } from '../test-utils'
import { DateField } from './DateField'

const LABEL = 'Date of birth'
const HINT = 'MM/DD/YYYY'
const BasicExample = () => <DateField label={LABEL} hint={HINT} />

describe('DateField renders', () => {
  it('Label', () => {
    const { getByLabelText } = render(<BasicExample />)
    expect(getByLabelText(LABEL)).toBeVisible()
  })

  it('String hint', () => {
    const { getByText } = render(<BasicExample />)
    expect(getByText(HINT)).toBeVisible()
  })

  it('Custom hint', () => {
    const HINT_TEXT = 'We take your privacy seriously.'
    const Hint = (
      <div sx={{ display: 'flex' }}>
        <img src="https://placekitten.com/16/16" alt="" sx={{ mr: 1 }} />
        <span sx={{ flex: 1 }}>{HINT_TEXT}</span>
      </div>
    )

    const { getByText } = render(
      <DateField label={LABEL} hint={Hint} sx={{ width: '100%' }} />
    )
    expect(getByText(HINT_TEXT)).toBeVisible()
  })
})

describe('DateField validates', () => {
  it("Doesn't accept letters", () => {
    const { getByLabelText } = render(<BasicExample />)
    const input = getByLabelText(LABEL) as HTMLInputElement
    const initialValue = input.value
    const TEST_VALUE = 'May Third'

    act(() => {
      fireEvent.change(input, { target: { value: TEST_VALUE } })
    })

    expect(input.value).toBe(initialValue)
  })

  it('Accepts and formats numbers', () => {
    const handleChange = jest.fn()

    const { getByLabelText } = render(
      <DateField label={LABEL} onChange={handleChange} />
    )
    const input = getByLabelText(LABEL) as HTMLInputElement
    const TEST_VALUE = '11221963'

    act(() => {
      fireEvent.change(input, { target: { value: TEST_VALUE } })
    })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenLastCalledWith('11/22/1963')
  })
})
