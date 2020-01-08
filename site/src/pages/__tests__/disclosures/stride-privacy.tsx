import React from 'react'
import { render } from '../../../test-utils'
import Page, { StridePolicyModal } from '../../disclosures/stride-privacy'

describe('Stride - Privacy policy disclosure', () => {
  it('renders as page', () => {
    expect(() => render(<Page />)).not.toThrow()
  })

  it('renders as modal content only', () => {
    const example = () => render(<StridePolicyModal />)

    expect(example).not.toThrow()
  })
})
