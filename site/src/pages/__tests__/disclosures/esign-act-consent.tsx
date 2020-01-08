import React from 'react'
import { render } from '../../../test-utils'
import Page, { EsignActConsentModal } from '../../disclosures/esign-act-consent'

describe('ESIGN Act consent disclosure', () => {
  it('renders as page', () => {
    const { getByText } = render(<Page />)
    const title = getByText(/Consent/i)

    expect(title).toBeVisible()
  })

  it('renders as modal content only', () => {
    const { getByText } = render(<EsignActConsentModal />)
    const title = getByText(/Consent/i)

    expect(title).toBeVisible()
  })
})
