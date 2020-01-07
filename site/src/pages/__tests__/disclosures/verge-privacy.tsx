import React from 'react'
import { render } from '../../../test-utils'
import Page, { VergePrivacyModal } from '../../disclosures/verge-privacy'

describe('Verge - Privacy policy disclosure', () => {
  it('renders as page', () => {
    const { getByText } = render(<Page />)
    const title = getByText(/Privacy Policy/)

    expect(title).toBeVisible()
  })

  it('renders as modal content only', () => {
    const { getByText } = render(<VergePrivacyModal />)
    const title = getByText(/Privacy Policy/)

    expect(title).toBeVisible()
  })
})
