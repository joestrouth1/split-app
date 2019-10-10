import React from 'react'
import { render } from '../test-utils'
import { Link } from '.'

function Example() {
  const linkRef = React.useRef<HTMLAnchorElement>(null)

  return (
    <Link ref={linkRef} variant="links.default">
      Text
    </Link>
  )
}

describe('Link', () => {
  it('renders', () => {
    const { getByText } = render(<Example />)
    expect(getByText('Text')).toBeVisible()
  })
})
