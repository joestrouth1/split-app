/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render, act, fireEvent } from '../../test-utils'
import BasicInformationPage from '../basic-information'
import { navigate } from 'gatsby'

const location = {
  search: '',
}

const Example = () => <BasicInformationPage location={location} />

describe('Basic info page', () => {
  it('Renders name & email fields', () => {
    const { getByLabelText } = render(<Example />)
    expect(getByLabelText('First name')).toBeVisible()
    expect(getByLabelText('Last name')).toBeVisible()
    expect(getByLabelText('Email address')).toBeVisible()
  })

  it("Doesn't submit without entry", () => {
    const { getByTestId, getByText } = render(<Example />)
    const form = getByTestId('basic-information-form')
    const button = getByText('Next')

    expect(form).toBeInvalid()

    act(() => {
      fireEvent.click(button)
    })

    expect(navigate).not.toHaveBeenCalled()
  })

  it('Submits with valid entry', () => {
    const { getByLabelText, getByText, getByTestId } = render(<Example />)

    const form = getByTestId('basic-information-form')

    const first = getByLabelText('First name')
    const middle = getByLabelText('Middle')
    const last = getByLabelText('Last name')
    const email = getByLabelText('Email address')
    const eConsent = getByLabelText(/Consent/i)
    const button = getByText('Next')

    act(() => {
      fireEvent.change(first, { target: { value: 'John' } })
      fireEvent.change(middle, { target: { value: 'Jacob' } })
      fireEvent.change(last, { target: { value: 'Jingleheimerschmidt' } })
      fireEvent.change(email, { target: { value: 'jimmydean@aol.net' } })
      fireEvent.click(eConsent)
    })

    expect(form).toBeValid()

    act(() => {
      fireEvent.click(button)
    })

    expect(navigate).toHaveBeenCalledTimes(1)
  })
})
