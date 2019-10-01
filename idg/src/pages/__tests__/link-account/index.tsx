import React from 'react'
import { render } from '../../../test-utils'
import Page from '../../link-account'

jest.mock('../../../components/illustration')

describe('Link account', () => {
  it('renders without throwing', () => {
    const { getByText } = render(<Page />)

    expect(getByText(`Link your bank account`)).toBeVisible()
  })
})
