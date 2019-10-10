import React from 'react'
import { render } from '../../../test-utils'
import Page, { EdcaModal } from '../../disclosures/edca'

describe('EDCA disclosure', () => {
  it('renders as page', () => {
    const { getByText } = render(<Page />)
    const title = getByText(
      /Electronic Disclosure and Communication Agreement/i
    )

    expect(title).toBeVisible()
  })

  it('renders as modal content only', () => {
    const { getByText } = render(<EdcaModal />)
    const title = getByText(
      /Electronic Disclosure and Communication Agreement/i
    )

    expect(title).toBeVisible()
  })
})
