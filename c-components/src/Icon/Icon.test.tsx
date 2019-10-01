import React from 'react'
import { render } from '../test-utils'
import { Icon } from '.'

describe('Icon', () => {
  it('Renders', () => {
    const { getByText } = render(<Icon alt="Invalid" name="times" />)
    expect(getByText('Invalid')).toBeVisible()
  })
})
