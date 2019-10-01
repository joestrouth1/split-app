import React from 'react'
import { render } from '../../test-utils'
import { DefaultLayout } from '../layouts/DefaultLayout'

describe('Default layout', () => {
  it('Renders its children', () => {
    const { getByText } = render(<DefaultLayout>Page content</DefaultLayout>)
    expect(getByText('Page content')).toBeVisible()
  })
})
