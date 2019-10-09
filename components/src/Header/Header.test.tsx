import React from 'react'
import { render, act, fireEvent } from '../test-utils'
import { Header } from '.'
import { Logo } from '../Logo'
import { Link } from '../Link'

describe('Header', () => {
  it('Shows company logo', async () => {
    const { getByAltText } = render(
      <Header logo={<Logo alt="Company name" />} />
    )
    expect(getByAltText('Company name')).toBeInTheDocument()
  })

  it('Shows menu button when children are passed', () => {
    const { getByText } = render(
      <Header logo={<Logo alt="Company name" />}>
        <Link href="/some-page">Click here</Link>
      </Header>
    )
    expect(getByText('Menu')).toBeInTheDocument()
  })

  it('Hides child content by default', () => {
    const { getByText } = render(
      <Header logo={<Logo alt="Company name" />}>
        <Link href="/some-page">A link</Link>
      </Header>
    )

    const link = getByText('A link')

    expect(link).not.toBeVisible()
  })

  it('Reveals child content when Menu button is clicked', () => {
    const { getByText } = render(
      <Header logo={<Logo alt="Company name" />}>
        <Link href="/some-page">A link</Link>
      </Header>
    )

    const menuButton = getByText('Menu')
    const link = getByText('A link')

    act(() => {
      fireEvent.click(menuButton)
    })

    expect(link).toBeVisible()
  })
})
