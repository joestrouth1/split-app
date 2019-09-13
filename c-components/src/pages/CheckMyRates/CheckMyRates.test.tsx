import React from 'react'
import { render } from '@testing-library/react'
import { CheckMyRates } from './CheckMyRates'

describe('Prequal rate-check confirmation prompt', () => {
  it('Renders', () => {
    const { getByText } = render(<CheckMyRates />)

    expect(getByText(`View my offer`)).toBeVisible()
  })
})
