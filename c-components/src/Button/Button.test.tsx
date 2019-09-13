import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('Shows child text', async () => {
    const { getByText } = render(<Button variant="primary">Click me</Button>)
    expect(getByText('Click me')).toBeInTheDocument()
  })

  it('Respects `disabled` prop', () => {
    const { getByText } = render(<Button variant="primary" disabled={true}>Disabled</Button>)
    expect(getByText('Disabled')).toBeDisabled()
  })
})
