import React from 'react'
import { render } from '../test-utils'
import { Alert } from './Alert'

describe('Alert', () => {
  it('Renders', () => {
    const { getByText } = render(<Alert variant="positive">Good news</Alert>)
    expect(getByText('Good news')).toBeVisible()
    expect(getByText('Good news')).toBeInTheDocument()
  })
})
