import React from 'react'
import { render } from '../../../test-utils'
import Page, { StridePolicyModal } from '../../disclosures/stride-privacy'

describe('Stride - Privacy policy disclosure', () => {
  it('renders as page', () => {
    const { getByText } = render(<Page />)
    const title = getByText(/Privacy Policy/)

    expect(title).toBeVisible()
  })

  it('renders as modal content only', () => {
    const { getByText } = render(<StridePolicyModal />)
    const title = getByText(/Privacy Policy/)

    expect(title).toBeVisible()
  })
})
