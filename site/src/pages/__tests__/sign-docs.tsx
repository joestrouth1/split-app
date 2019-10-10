import React from 'react'
import { render } from '../../test-utils'
import Page from '../sign-docs'

describe('Sign docs page', () => {
  it('renders', () => {
    function getExample() {
      return render(<Page />)
    }

    expect(getExample).not.toThrow()
  })
})
