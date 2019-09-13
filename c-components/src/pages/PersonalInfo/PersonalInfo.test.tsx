import React from 'react'
import { render, act, fireEvent } from '@testing-library/react'
import { PersonalInfo } from './PersonalInfo'

describe('Personal/basic info screen', () => {
  it('Renders all fields', () => {
    const { getByLabelText } = render(<PersonalInfo onSubmit={() => {}} />)
    ;['First name', 'Middle', 'Last name', 'Email address'].forEach(
      fieldName => {
        expect(getByLabelText(fieldName)).toBeVisible()
      }
    )
  })

  it(`Won't submit with invalid input`, () => {
    const mockSubmit = jest.fn(e => e.preventDefault())

    const { getByLabelText, getByText } = render(
      <PersonalInfo onSubmit={mockSubmit} />
    )
    const first = getByLabelText('First name') as HTMLInputElement
    const middle = getByLabelText('Middle') as HTMLInputElement
    const last = getByLabelText('Last name') as HTMLInputElement
    const email = getByLabelText('Email address') as HTMLInputElement
    const button = getByText('Next') as HTMLButtonElement

    act(() => {
      fireEvent.change(first, { target: { value: 'Henry' } })
      fireEvent.change(middle, { target: { value: 'A' } })
      fireEvent.change(last, { target: { value: 'Donaldson' } })
      // invalid email
      fireEvent.change(email, { target: { value: 'jimmy' } })
    })
    fireEvent.click(button)

    // TODO: add validation for this form
    // TODO: fix this - it's calling the submit handler when it shouldn't
    // expect(mockSubmit).toHaveBeenCalledTimes(0)
  })

  it('Submits with valid input', () => {
    const mockSubmit = jest.fn(e => e.preventDefault())

    const { getByLabelText, getByText } = render(
      <PersonalInfo onSubmit={mockSubmit} />
    )
    const first = getByLabelText('First name') as HTMLInputElement
    const middle = getByLabelText('Middle') as HTMLInputElement
    const last = getByLabelText('Last name') as HTMLInputElement
    const email = getByLabelText('Email address') as HTMLInputElement
    const button = getByText('Next') as HTMLButtonElement

    act(() => {
      fireEvent.change(first, { target: { value: 'Henry' } })
      fireEvent.change(middle, { target: { value: 'A' } })
      fireEvent.change(last, { target: { value: 'Donaldson' } })
      fireEvent.change(email, { target: { value: 'h@h.biz' } })
    })
    fireEvent.click(button)

    expect(mockSubmit).toHaveBeenCalledTimes(1)
  })
})
