import React from 'react'
import { render } from '../../../test-utils'
import Page, { VergePrivacyModal } from '../../disclosures/verge-privacy'

describe('Verge - Privacy policy disclosure', () => {
  it('renders as page', () => {
    expect(() => render(<Page />)).not.toThrow()
  })

  it('renders as modal content only', () => {
    const example = () => render(<VergePrivacyModal />)

    expect(example).not.toThrow()
  })
})
