import React from 'react'
import { render } from '../test-utils'
import { Logo } from '.'

describe('Logo', () => {
  it('Shows default logo', async () => {
    const { getByAltText } = render(<Logo alt="Company Name" />)
    expect(getByAltText('Company Name')).toBeVisible()
  })

  it('Shows logo passed by url', () => {
    const { getByAltText } = render(
      <Logo alt="Company Name" src="https://test.com/test.jpg" />
    )

    expect(getByAltText('Company Name')).toBeVisible()
  })
})
