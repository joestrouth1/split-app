import React from 'react'
import { render } from '../test-utils'
import { Icon, ICON_NAMES } from '.'

describe('Icon', () => {
  it('Renders text alternative', () => {
    const alt = 'Invalid'
    const { getByText } = render(<Icon alt={alt} name="times" />)
    expect(getByText(alt)).toBeVisible()
  })

  it('Renders each icon', () => {
    function testIcon(name: typeof ICON_NAMES[number]) {
      expect(() => render(<Icon name={name} alt="" />)).not.toThrow()
    }

    for (const iconName of ICON_NAMES) {
      testIcon(iconName)
    }
  })
})
