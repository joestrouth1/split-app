import React from 'react'
import { render } from '@testing-library/react'
import { SecureAccount } from './SecureAccount'

describe('2FA page', () => {
  it('Renders', () => {
    const { getByText } = render(<SecureAccount />)

    expect(getByText('Secure your account')).toBeVisible()
  })
})
