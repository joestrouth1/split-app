import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ResidentialInfo } from './ResidentialInfo'
import { act } from 'react-dom/test-utils'

describe('Personal/basic info screen', () => {
  it('Renders all fields', () => {
    const { getByLabelText } = render(<ResidentialInfo onSubmit={() => {}} />)
    const address = getByLabelText('Address') as HTMLInputElement
    const address2 = getByLabelText(
      'Apartment, suite, or building (optional)'
    ) as HTMLInputElement
    const city = getByLabelText('City') as HTMLInputElement
    const state = getByLabelText('State') as HTMLInputElement
    const ZIP = getByLabelText('ZIP') as HTMLInputElement
    const phone = getByLabelText('Phone number') as HTMLInputElement

    for (const field of [address, address2, city, state, ZIP, phone]) {
      expect(field).toBeVisible()
    }
  })

  it('Invalid by default', () => {
    const { getByTestId, getByText } = render(
      <ResidentialInfo onSubmit={() => {}} />
    )
    const form = getByTestId('residential-info-form')
    const button = getByText('Next')

    expect(form).toBeInvalid()
    expect(button).toBeDisabled()
  })

  it('Submits, given valid input', () => {
    const mockSubmit = jest.fn(e => e.preventDefault())
    const checkValidSpy = jest.spyOn(HTMLFormElement.prototype, 'checkValidity')

    const { getByLabelText, getByText, getByTestId } = render(
      <ResidentialInfo onSubmit={mockSubmit} />
    )

    const form = getByTestId('residential-info-form')
    const address1 = getByLabelText('Address')
    const city = getByLabelText('City')
    const state = getByLabelText('State')
    const zip = getByLabelText('ZIP')
    const phone = getByLabelText('Phone number')
    const button = getByText('Next')

    act(() => {
      fireEvent.change(address1, { target: { value: '123 street' } })
      fireEvent.change(city, { target: { value: 'Wichita' } })
      fireEvent.change(state, { target: { value: 'KS' } })
      fireEvent.change(zip, { target: { value: '77777' } })
      fireEvent.change(phone, { target: { value: '3165555555' } })
    })
    fireEvent.click(button)

    expect(form).toBeValid()
    expect(button).not.toBeDisabled()
    expect(checkValidSpy).toHaveBeenCalled()
    expect(mockSubmit).toHaveBeenCalled()
  })
})
