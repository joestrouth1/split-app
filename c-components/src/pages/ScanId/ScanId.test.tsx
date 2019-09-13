import React from 'react'
import { render } from '@testing-library/react'
import { ScanId } from './ScanId'

describe('Scan your ID page', () => {
  it('Renders', () => {
    const { getByText } = render(<ScanId />)

    expect(getByText('Scan your ID card')).toBeVisible()
  })
})
