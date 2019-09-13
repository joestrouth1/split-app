import React from 'react'
import { render } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('Shows company logo', async () => {
    const { getByAltText } = render(<Header />)
    expect(getByAltText('Company Name')).toBeInTheDocument()
  })

  it('Shows menu button', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Menu')).toBeInTheDocument()
  })
})
