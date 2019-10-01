import React from 'react'
import { render } from '../../test-utils'
import Page from '../check-rates'

jest.mock('../../components/illustration')

describe('Check rates renders', () => {
  it('next button without throwing', () => {
    const { getByText } = render(<Page />)

    expect(getByText(`View my options`)).toBeVisible()
  })
})
