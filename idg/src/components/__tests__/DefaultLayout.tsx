import React from 'react'
import { render } from '@testing-library/react'
import {
  PureDefaultLayout,
  PureDefaultLayoutProps,
} from '../layouts/DefaultLayout'

describe('Default layout', () => {
  const props: Omit<PureDefaultLayoutProps, 'children'> = {
    data: {
      allPages: {
        nodes: [{ path: '/' }, { path: '/404' }],
      },
    },
  }

  it('Renders its children', () => {
    const { getByText } = render(
      <PureDefaultLayout {...props}>Page content</PureDefaultLayout>
    )
    expect(getByText('Page content')).toBeVisible()
  })
})
