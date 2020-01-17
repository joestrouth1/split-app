import React from 'react'
import { navigate } from 'gatsby'
import { render, act, fireEvent } from '../../test-utils'
import Page from '../save-password'

describe('Save password page', () => {
  it('Renders field', () => {
    const { getByLabelText } = render(<Page />)

    const field = getByLabelText('Password')
    expect(field).toBeVisible()
  })

  it('Invalid by default', () => {
    const { getByTestId, getByText } = render(<Page />)
    const form = getByTestId('save-password-form')
    const button = getByText('Next')

    expect(form).toBeInvalid()
    expect(button).toBeDisabled()
  })

  it('Submits, given valid input', async () => {
    const { getByLabelText, getByText, getByTestId } = render(<Page />)
    const form = getByTestId('save-password-form')
    const password = getByLabelText('Password')
    const securityQuestion = getByLabelText('Security question')
    const securityAnswer = getByLabelText('Security question answer')
    const button = getByText('Next')

    act(() => {
      fireEvent.change(password, { target: { value: 'SuperS3cur3' } })
      fireEvent.change(securityQuestion, { target: { value: 'favorite-pet' } })
      fireEvent.change(securityAnswer, { target: { value: 'Rocky' } })
    })
    expect(form).toBeValid()
    expect(button).not.toBeDisabled()
    act(() => {
      fireEvent.click(button)
    })
    expect(navigate).toHaveBeenCalledTimes(1)
  })
})
