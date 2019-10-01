import React from 'react'
import { render, act, fireEvent } from '../test-utils'
import { SocialSecurityField } from '.'

const LABEL = 'Social Security Number'
const HINT = '123-45-6789'
const BasicExample = () => <SocialSecurityField label={LABEL} hint={HINT} />

describe('SocialSecurityField renders', () => {
  it('Label', () => {
    const { getByLabelText } = render(<BasicExample />)
    expect(getByLabelText(LABEL)).toBeVisible()
  })

  it('String hint', () => {
    const { getByText } = render(<BasicExample />)
    expect(getByText(HINT)).toBeVisible()
  })

  it('Custom hint', () => {
    const Hint = (
      <div sx={{ display: 'flex' }}>
        <img src="https://placekitten.com/16/16" alt="" sx={{ mr: 1 }} />
        <span sx={{ flex: 1 }}>We take your privacy seriously.</span>
      </div>
    )

    const { getByText } = render(
      <SocialSecurityField label={LABEL} hint={Hint} sx={{ width: '100%' }} />
    )
    expect(getByText('We take your privacy seriously.')).toBeVisible()
  })
})

describe('SocialSecurityField validates', () => {
  it("Doesn't accept letters", () => {
    const { getByLabelText } = render(<BasicExample />)
    const input = getByLabelText(LABEL) as HTMLInputElement
    const initialValue = input.value
    const TEST_VALUE = 'Two Two Four Eight Five Nine Nine Nine Nine'

    act(() => {
      fireEvent.change(input, { target: { value: TEST_VALUE } })
    })

    expect(input.value).toBe(initialValue)
  })

  it("Doesn't accept special characters", () => {
    const { getByLabelText } = render(<BasicExample />)
    const input = getByLabelText(LABEL) as HTMLInputElement
    const initialValue = input.value
    const TEST_VALUE = `!@#$~\`%^&*()_+-={}[]|\\:";'<>,.?/`

    act(() => {
      fireEvent.change(input, { target: { value: TEST_VALUE } })
    })

    expect(input.value).toBe(initialValue)
  })

  it('Accepts and formats numbers', () => {
    const handleChange = jest.fn()

    const { getByLabelText } = render(
      <SocialSecurityField label={LABEL} onChange={handleChange} />
    )
    const input = getByLabelText(LABEL) as HTMLInputElement
    const TEST_VALUE = '224859999'

    act(() => {
      fireEvent.change(input, { target: { value: TEST_VALUE } })
    })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenLastCalledWith('224-85-9999')
  })

  it('Is valid when all digits are passed', () => {
    const ref = React.createRef<HTMLInputElement>()

    const { getByLabelText } = render(
      <SocialSecurityField label={LABEL} ref={ref} />
    )
    const input = getByLabelText(LABEL) as HTMLInputElement
    const TEST_VALUE = '224859999'

    act(() => {
      fireEvent.change(input, { target: { value: TEST_VALUE } })
    })

    const valid = ref && ref.current && ref.current.checkValidity()

    expect(valid).toBe(true)
  })

  it('Is invalid when insufficient digits are passed', () => {
    const ref = React.createRef<HTMLInputElement>()

    const { getByLabelText } = render(
      <SocialSecurityField label={LABEL} ref={ref} />
    )
    const input = getByLabelText(LABEL) as HTMLInputElement
    const TEST_VALUE = '2248599'

    act(() => {
      fireEvent.change(input, { target: { value: TEST_VALUE } })
    })

    const valid = ref && ref.current && ref.current.checkValidity()

    expect(valid).toBe(false)
  })
})
