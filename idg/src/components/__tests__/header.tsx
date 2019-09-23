import React from 'react'
import { render } from '@testing-library/react'
import { Header } from '../header'

describe('Header', () => {
  it('Renders company logo', () => {
    const { queryByText } = render(<Header>Menu content</Header>)
    expect(queryByText(/Company name/i)).toBeVisible()
  })
})
