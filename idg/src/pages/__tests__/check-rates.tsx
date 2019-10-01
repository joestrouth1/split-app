import React from 'react'
import { render } from '../../test-utils'
import Page from '../check-rates'

describe('Check rates renders', () => {
  it('next button without throwing', () => {
    const { getByText } = render(<Page />)

    expect(getByText(`View my options`)).toBeVisible()
  })
})
