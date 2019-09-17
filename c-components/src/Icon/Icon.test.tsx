import React from 'react'
import { render } from '@testing-library/react'
import { Icon } from './Icon'

describe('Icon', () => {
  it('Renders', () => {
    const { getByText } = render(<Icon alt="Invalid" name="times" />)
    expect(getByText('Invalid')).toBeVisible()
  })
})
