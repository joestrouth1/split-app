import React from 'react'
import { render, act, fireEvent } from '../../../test-utils'
import Page from '../../secure-account/confirm-code'
import { navigate } from 'gatsby'

describe('Secure account - 2FA confirm code page', () => {
  it('renders field', () => {
    const { getByLabelText } = render(<Page />)

    const input = getByLabelText('Authentication code')
    expect(input).toBeVisible()
  })

  it("Doesn't submit without entry", () => {
    const { getByText, getByTestId } = render(<Page />)
    const cta = getByText('Confirm my code')
    const form = getByTestId('confirmation-code-form')

    expect(form).toBeInvalid()

    act(() => {
      fireEvent.click(cta)
    })

    expect(navigate).not.toHaveBeenCalled()
  })

  it('Submits with code entry', () => {
    const { getByText, getByLabelText, getByTestId } = render(<Page />)
    const cta = getByText('Confirm my code')
    const input = getByLabelText('Authentication code')
    const form = getByTestId('confirmation-code-form')

    window.confirm = jest.fn(() => true)
    expect(form).toBeInvalid()
    act(() => {
      fireEvent.change(input, { target: { value: '54321' } })
    })

    act(() => {
      fireEvent.click(cta)
    })

    expect(navigate).toHaveBeenCalled()
  })

  it("Doesn't submit with bad server response", () => {
    const { getByText, getByLabelText, getByTestId } = render(<Page />)
    const cta = getByText('Confirm my code')
    const input = getByLabelText('Authentication code')
    const form = getByTestId('confirmation-code-form')
    window.confirm = jest.fn(() => false)

    expect(form).toBeInvalid()
    act(() => {
      fireEvent.change(input, { target: { value: '54321' } })
    })
    expect(form).toBeValid()
    act(() => {
      fireEvent.click(cta)
    })

    expect(navigate).not.toHaveBeenCalled()
  })

  it('Displays error message w/ bad server response', async () => {
    const { getByText, getByLabelText, findByText } = render(<Page />)
    const cta = getByText('Confirm my code')
    const input = getByLabelText('Authentication code')
    window.confirm = jest.fn(() => false)

    act(() => {
      fireEvent.change(input, { target: { value: '54321' } })
    })

    act(() => {
      fireEvent.click(cta)
    })

    const error = await findByText(/try again/i)
    expect(error).toBeVisible()
  })

  it('Displays attempts remaining on repeated failures', async () => {
    const { getByText, getByLabelText, findByText } = render(<Page />)
    const cta = getByText('Confirm my code')
    const input = getByLabelText('Authentication code')
    window.confirm = jest.fn(() => false)

    act(() => {
      fireEvent.change(input, { target: { value: '54321' } })
    })

    act(() => {
      for (let i = 0; i < 5; i++) {
        fireEvent.click(cta)
      }
    })

    const remaining = await findByText(/Attempts remaining/i)
    expect(remaining).toBeVisible()
  })

  // TODO: implement and properly test 'Request another code' functionality
  it('Requests another code without leaving the page', () => {
    const { getByText } = render(<Page />)
    const requestLink = getByText(/Request another code/i)

    act(() => {
      fireEvent.click(requestLink)
    })

    expect(navigate).not.toHaveBeenCalled()
  })
})
