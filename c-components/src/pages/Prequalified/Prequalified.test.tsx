import React from 'react'
import { render } from '@testing-library/react'
import { Prequalified } from './Prequalified'

describe('Prequal rate-check confirmation prompt', () => {
  it('Renders', () => {
    const { getByText } = render(<Prequalified />)

    expect(getByText(`You're pre-qualified for up to:`)).toBeInTheDocument()
  })
})
