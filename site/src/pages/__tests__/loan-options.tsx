import React from 'react'
import { render } from '../../test-utils'
import Page from '../loan-options'

describe('Loan options - renders', () => {
  it('without throwing', () => {
    expect(() => render(<Page />)).not.toThrow()
  })
})
