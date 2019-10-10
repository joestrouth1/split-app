import React from 'react'
import { render } from '../../../test-utils'
import Page from '../../secure-account/verify-contact'

const getLocation = (method: 'sms' | 'email') => ({
  search: `?method=${method}`,
})

const address = { phone: '123-454-7968' }
const user = { email: 'testtesterson@testing.com' }
const matchPhone = /\*{3}-\*{3}-\d{4}/
const matchEmail = /te\*+@testing.com/

beforeEach(() => {
  sessionStorage.setItem('address', JSON.stringify(address))
  sessionStorage.setItem('user', JSON.stringify(user))
})

describe('Secure account - verify contact page', () => {
  it('renders title', () => {
    const { getByText } = render(<Page location={getLocation('sms')} />)

    const title = getByText(/Where should we contact you/)
    expect(title).toBeVisible()
  })

  it("doesn't render pre-selected card without session data", () => {
    for (const method of ['sms', 'email'] as const) {
      sessionStorage.clear()
      const { queryByText } = render(<Page location={getLocation(method)} />)
      expect(queryByText(matchEmail)).toBeNull()
      expect(queryByText(matchPhone)).toBeNull()
    }
  })

  it('renders pre-selected saved phone', () => {
    const { getByText } = render(<Page location={getLocation('sms')} />)

    const selectedSavedPhone = getByText(matchPhone)

    expect(selectedSavedPhone).toBeVisible()
  })

  it('renders pre-selected saved email', () => {
    const { getByText } = render(<Page location={getLocation('email')} />)

    const selectedSavedEmail = getByText(matchEmail)

    expect(selectedSavedEmail).toBeVisible()
  })

  it('defaults to sms in case of conflicting array methods', () => {
    const conflictingLocation = {
      search: '?method=sms&method=email',
    }

    const { getByText } = render(<Page location={conflictingLocation} />)

    expect(getByText(matchPhone)).toBeVisible()
  })

  it('customizes CTA text based on method', () => {
    const methods = [
      {
        name: 'sms',
        text: 'Text',
      },
      {
        name: 'email',
        text: 'Email',
      },
    ] as const

    for (const method of methods) {
      const { getByText } = render(<Page location={getLocation(method.name)} />)

      expect(getByText(new RegExp(`${method.text} my code`))).toBeVisible()
    }
  })
})
