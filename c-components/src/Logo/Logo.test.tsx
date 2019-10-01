import React from 'react'
import { render } from '../test-utils'
import { Logo } from './Logo'

describe('Logo', () => {
  it('Shows company logo', async () => {
    const { getByAltText } = render(<Logo alt="Company Name" />)
    expect(getByAltText('Company Name')).toBeInTheDocument()
  })
})
