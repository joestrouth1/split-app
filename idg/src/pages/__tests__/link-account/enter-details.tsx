/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render, act, fireEvent } from '@testing-library/react'
import { navigate } from 'gatsby'
import EnterDetailsPage from '../../link-account/enter-details'
jest.mock('../../../components/illustration')

describe('Enter bank details page', () => {
  it('Renders - not prepopulated', () => {
    const { getByLabelText } = render(<EnterDetailsPage location={{}} />)

    const routing = getByLabelText('Routing number') as HTMLInputElement
    const account = getByLabelText('Account number') as HTMLInputElement

    expect(routing).toBeVisible()
    expect(account).toBeVisible()
    expect(routing.value).toBe('')
    expect(account.value).toBe('')
  })

  it('Renders - prepopulated from location state, e.g. from check scan', () => {
    const ROUTING = '123456789'
    const ACCOUNT = '987654312'
    const { getByLabelText, getByTestId } = render(
      <EnterDetailsPage
        location={{
          state: {
            routing: ROUTING,
            account: ACCOUNT,
          },
        }}
      />
    )

    const routing = getByLabelText('Routing number')
    const account = getByLabelText('Account number')
    const form = getByTestId('enter-details-form')

    expect(routing).toBeVisible()
    expect(account).toBeVisible()
    expect(form).toHaveFormValues({
      routing: ROUTING,
      account: ACCOUNT,
    })
  })

  it('Submits if valid', () => {
    const ROUTING = '123456789'
    const ACCOUNT = '987654312'
    const { getByTestId, getByText } = render(
      <EnterDetailsPage
        location={{ state: { routing: ROUTING, account: ACCOUNT } }}
      />
    )
    const form = getByTestId('enter-details-form')
    const button = getByText('Next')

    expect(form).toBeValid()
    expect(button).not.toBeDisabled()

    act(() => {
      fireEvent.click(button)
    })

    expect(navigate).toHaveBeenCalledTimes(1)
  })
})
