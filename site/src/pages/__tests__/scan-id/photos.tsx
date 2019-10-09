import React from 'react'
import { render } from '../../../test-utils'
import Page from '../../scan-id/photos'

describe('Scan ID - Photo upload page', () => {
  it('renders', () => {
    const { getByText } = render(<Page />)

    const title = getByText('Scan your ID')
    expect(title).toBeVisible()
  })
})
