import React from 'react'
import { render } from '@testing-library/react'
import { DefaultLayout } from '../layouts'

describe('Default layout', () => {
  it('renders', () => {
    const { getByText } = render(<DefaultLayout>Page content</DefaultLayout>)
    expect(getByText(/menu/i)).toBeVisible()
  })
})
