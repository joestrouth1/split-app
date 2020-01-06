import React from 'react'
import { render } from '../../test-utils'
import Page from '../mail'

describe('Prescreen offer landing - renders', () => {
  it('without throwing', () => {
    expect(() => render(<Page />)).not.toThrow()
  })
})
