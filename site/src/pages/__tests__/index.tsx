/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render, fireEvent, act } from '../../test-utils'
import Page from '../index'

describe('Sign-in/index page', () => {
  it('renders Apply Now button', () => {
    const { queryAllByText } = render(<Page />)
    expect(queryAllByText('Apply now')).not.toHaveLength(0)
  })

  it('Submits with email and password', () => {
    /* TODO: replace alert with navigate when acct summary exists */
    window.alert = jest.fn()
    const { getByLabelText, getByText } = render(<Page />)
    const email = getByLabelText(/email/i)
    const password = getByLabelText(/password/i)
    const signIn = getByText('Sign in')

    act(() => {
      fireEvent.change(email, { target: { value: 'test@test.com' } })
      fireEvent.change(password, { target: { value: 'super-SECRET123' } })
    })

    act(() => {
      fireEvent.click(signIn)
    })

    expect(window.alert).toHaveBeenCalledTimes(1)
  })
})
