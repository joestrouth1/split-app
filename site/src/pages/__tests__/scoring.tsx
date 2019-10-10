import React from 'react'
import { render } from '../../test-utils'
import Page from '../scoring'

describe('Scoring page', () => {
  it('renders', () => {
    function getExample() {
      return render(<Page />)
    }

    expect(getExample).not.toThrow()
  })
})
