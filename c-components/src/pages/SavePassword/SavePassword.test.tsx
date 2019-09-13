import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { SavePassword } from './SavePassword'

describe('Personal/basic info screen', () => {
  it('Renders field', () => {
    const { getByLabelText } = render(<SavePassword onSubmit={() => {}} />)

    const field = getByLabelText('Password') as HTMLInputElement
    expect(field).toBeVisible()
  })

  it('Invalid by default', () => {
    const { getByTestId, getByText } = render(
      <SavePassword onSubmit={() => {}} />
    )
    const form = getByTestId('save-password-form')
    const button = getByText('Next')

    expect(form).toBeInvalid()
    expect(button).toBeDisabled()
  })

  it('Submits, given valid input', async () => {
    const mockSubmit = jest.fn(e => e.preventDefault())
    const { getByLabelText, getByText, getByTestId } = render(
      <SavePassword onSubmit={mockSubmit} />
    )
    const form = getByTestId('save-password-form') as HTMLFormElement
    const password = getByLabelText('Password') as HTMLInputElement
    const button = getByText('Next') as HTMLButtonElement

    fireEvent.change(password, { target: { value: 'SuperS3cur3' } })
    expect(form).toBeValid()
    expect(button).not.toBeDisabled()
    fireEvent.click(button)
    expect(mockSubmit).toHaveBeenCalledTimes(1)
  })
})
