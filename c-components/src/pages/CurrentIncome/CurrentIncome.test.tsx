import React from 'react'
import { render } from '@testing-library/react'
import { CurrentIncome } from './CurrentIncome'

describe('Current income assessment page', () => {
  it('Renders', () => {
    const { getByText } = render(<CurrentIncome />)

    expect(getByText(`What’s your current income?`)).toBeVisible()
  })
})
