import React from 'react'
import { render } from '@testing-library/react'
import { VerifyIdentity } from './VerifyIdentity'

describe('Verify identity details page', () => {
  it('Renders', () => {
    const { getByText } = render(<VerifyIdentity />)

    expect(getByText(`Verify your identity`)).toBeInTheDocument()
  })
})
