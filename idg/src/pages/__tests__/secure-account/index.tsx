import React from 'react'
import { render } from '../../../test-utils'
import Page from '../../secure-account'

describe('Secure account - 2FA intro page', () => {
  it('renders', () => {
    const { getByText } = render(<Page />)

    const title = getByText('Secure your account')
    expect(title).toBeVisible()
  })
})
