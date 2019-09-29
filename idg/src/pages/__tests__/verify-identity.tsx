import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import { default as Page } from '../verify-identity'

const SOCIAL_LABEL = 'Social Security Number'
const DOB_LABEL = 'Date of birth'
const BUTTON_LABEL = 'Next'
const FORM_TESTID = 'verify-identity-form'

describe('Verify ID renders', () => {
  it('SSN and DOB fields', () => {
    const { getByLabelText } = render(<Page />)
    expect(getByLabelText(SOCIAL_LABEL)).toBeVisible()
    expect(getByLabelText(DOB_LABEL)).toBeVisible()
  })
})

describe('Verify ID validates', () => {
  it("Doesn't submit without input", () => {
    const { getByText, getByTestId } = render(<Page />)
    const button = getByText(BUTTON_LABEL)
    const form = getByTestId(FORM_TESTID)
    form.onsubmit = jest.fn()

    act(() => {
      fireEvent.click(button)
    })

    expect(form.onsubmit).not.toHaveBeenCalled()
  })

  it('Submits with valid input', () => {
    const { getByText, getByLabelText, getByTestId } = render(<Page />)
    const ssn = getByLabelText(SOCIAL_LABEL)
    const dob = getByLabelText(DOB_LABEL)
    const button = getByText(BUTTON_LABEL)
    const form = getByTestId(FORM_TESTID)
    form.onsubmit = jest.fn()

    act(() => {
      fireEvent.change(ssn, { target: { value: '123456789' } })
      fireEvent.change(dob, { target: { value: '11221963' } })
    })
    act(() => {
      fireEvent.click(button)
    })

    expect(form).toHaveFormValues({
      ssn: '123-45-6789',
      dob: '11/22/1963',
    })
    expect(form).toBeValid()
    expect(form.onsubmit).toHaveBeenCalledTimes(1)
  })
})
