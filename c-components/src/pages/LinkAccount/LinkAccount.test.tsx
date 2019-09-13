import React from 'react'
import { render } from '@testing-library/react'
import { LinkAccount } from './LinkAccount'

describe('Link account page', () => {
  it('Renders', () => {
    const { getByText } = render(<LinkAccount />)

    expect(getByText(`Link your bank account`)).toBeInTheDocument()
  })
})
