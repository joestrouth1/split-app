/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render, act, fireEvent } from '../../test-utils'
import DisclosuresPage from '../disclosures'
import { navigate } from 'gatsby'

const Example = () => <DisclosuresPage />

describe('Disclosures page', () => {
  it("Doesn't submit without entry", () => {
    const { getByTestId, getByText } = render(<Example />)
    const form = getByTestId('disclosures-form')
    const button = getByText('Next')

    expect(form).toBeInvalid()

    act(() => {
      fireEvent.click(button)
    })

    expect(navigate).not.toHaveBeenCalled()
  })

  it('Submits with valid entry', () => {
    const { getByLabelText, getByText, getByTestId } = render(<Example />)

    const form = getByTestId('disclosures-form')
    const button = getByText('Next')

    const edca = getByLabelText(
      /Electronic Disclosure and Communication Agreement/i
    )
    const privacyPolicy = getByLabelText(/Privacy Notice/i)
    const disputeResolution = getByLabelText(
      /Agreements for Resolving Disputes/i
    )
    const creditInquiry = getByLabelText(
      /Credit Inquiry and Reporting Agreement/i
    )
    const tcpa = getByLabelText(/Telecommunications Policy/)

    act(() => {
      fireEvent.click(edca)
      fireEvent.click(privacyPolicy)
      fireEvent.click(disputeResolution)
      fireEvent.click(creditInquiry)
      fireEvent.click(tcpa)
    })

    expect(form).toBeValid()
    expect(form).toHaveFormValues({
      edcaConsent: true,
      privacyPolicyConsent: true,
      disputeResolutionConsent: true,
      creditInquiryConsent: true,
      tcpaConsent: true,
    })
    expect(button).not.toBeDisabled()

    act(() => {
      fireEvent.click(button)
    })

    expect(navigate).toHaveBeenCalledTimes(1)
  })
})
