import React from 'react'
import { render } from '../../../test-utils'
import Page, { PrivacyPolicyModal } from '../../disclosures/privacy-policy'

describe('Privacy policy disclosure', () => {
  it('renders as page', () => {
    const { getByText } = render(<Page />)
    const title = getByText(/Privacy Policy/)

    expect(title).toBeVisible()
  })

  it('renders as modal content only', () => {
    const { getByText } = render(<PrivacyPolicyModal />)
    const title = getByText(/Privacy Policy/)

    expect(title).toBeVisible()
  })
})
