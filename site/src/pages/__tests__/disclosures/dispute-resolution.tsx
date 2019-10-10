import React from 'react'
import { render } from '../../../test-utils'
import Page, {
  DisputeResolutionModal,
} from '../../disclosures/dispute-resolution'

describe('Dispute resolution disclosure', () => {
  it('renders as page', () => {
    const { getByText } = render(<Page />)
    const title = getByText(/Agreements for Resolving Disputes/i)

    expect(title).toBeVisible()
  })

  it('renders as modal content only', () => {
    const { getByText } = render(<DisputeResolutionModal />)
    const title = getByText(/Agreements for Resolving Disputes/i)

    expect(title).toBeVisible()
  })
})
