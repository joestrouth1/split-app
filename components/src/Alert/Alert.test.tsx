import React from 'react'
import { render } from '../test-utils'
import { Alert } from '.'

describe('Alert', () => {
  it('Renders', () => {
    const { getByText } = render(<Alert variant="positive">Good news</Alert>)
    expect(getByText('Good news')).toBeVisible()
  })
  it('Renders, negative', () => {
    const { getByText } = render(<Alert variant="negative">Bad news</Alert>)
    expect(getByText('Bad news')).toBeVisible()
  })
})
