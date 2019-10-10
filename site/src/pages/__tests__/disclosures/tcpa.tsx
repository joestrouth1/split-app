import React from 'react'
import { render } from '../../../test-utils'
import Page, { TcpaModal } from '../../disclosures/tcpa'

describe('TCPA disclosure', () => {
  it('renders as page', () => {
    const { getByText } = render(<Page />)
    const title = getByText(/Telecommunications Consent and Privacy Agreement/)

    expect(title).toBeVisible()
  })

  it('renders as modal content only', () => {
    const { getByText } = render(<TcpaModal />)
    const title = getByText(/Telecommunications Consent and Privacy Agreement/)

    expect(title).toBeVisible()
  })
})
