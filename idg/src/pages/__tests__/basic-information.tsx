/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render, renderWithRouter, act, fireEvent } from '../../test-utils'
import BasicInformationPage from '../basic-information'
jest.requireActual('gatsby')

const startingRoute = '/basic-information'
const location = {
  search: '',
  pathname: startingRoute,
}

const Example = () => <BasicInformationPage location={location} />

describe('Basic info page', () => {
  beforeEach(() => {
    // global.___navigate = jest.fn()
  })

  it('Renders name & email fields', () => {
    const { getByLabelText } = render(<Example />)
    expect(getByLabelText('First name')).toBeVisible()
    expect(getByLabelText('Last name')).toBeVisible()
    expect(getByLabelText('Email address')).toBeVisible()
  })

  it("Can't advance without valid submission", () => {
    const { getByTestId, getByText, history } = renderWithRouter(<Example />, {
      route: startingRoute,
    })
    const form = getByTestId('basic-information-form')
    const button = getByText('Next')

    expect(form).toBeInvalid()

    act(() => {
      fireEvent.click(button)
    })

    expect(history.location.pathname).toBe(startingRoute)
  })

  it('Advances with valid submission', () => {
    const {
      getByLabelText,
      getByText,
      getByTestId,
      history,
    } = renderWithRouter(<Example />, {
      route: startingRoute,
    })

    const form = getByTestId('basic-information-form')

    const first = getByLabelText('First name')
    const last = getByLabelText('Last name')
    const email = getByLabelText('Email address')
    const eConsent = getByLabelText(/ESIGN Act Consent/i)
    const button = getByText('Next')

    act(() => {
      fireEvent.change(first, { target: { value: 'John' } })
      fireEvent.change(last, { target: { value: 'Jacob-Jingleheimerschmidt' } })
      fireEvent.change(email, { target: { value: 'jimmydean@aol.net' } })
      fireEvent.click(eConsent)
    })

    expect(form).toBeValid()

    act(() => {
      fireEvent.click(button)
    })

    expect(history.location.pathname).not.toBe(startingRoute)
  })
})
