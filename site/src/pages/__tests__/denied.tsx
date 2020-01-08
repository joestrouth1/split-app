import React from 'react'
import { render } from '../../test-utils'
import Page from '../denied'

describe('Denied - renders', () => {
  it('visible page title', () => {
    const { getByText } = render(<Page />)

    expect(getByText(/denied/i)).toBeVisible()
  })
})
