import React from 'react'
import { render } from '../../../test-utils'
import Page, { CreditInquiryModal } from '../../disclosures/credit-inquiry'

describe('Credit inquiry disclosure', () => {
  it('renders as page', () => {
    const { getByText } = render(<Page />)
    const title = getByText(/Consumer credit inquiry/i)

    expect(title).toBeVisible()
  })

  it('renders as modal content only', () => {
    const { getByText } = render(<CreditInquiryModal />)
    const title = getByText(/Consumer credit inquiry/i)

    expect(title).toBeVisible()
  })
})
