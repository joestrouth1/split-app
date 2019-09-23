/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render } from '@testing-library/react'
import VerifyIdentityPage from '../verify-identity'

describe('Verify ID page', () => {
  it('Renders SSN and DOB fields', () => {
    const page = <VerifyIdentityPage />

    const { getByLabelText } = render(page)
    expect(getByLabelText('Social Security Number')).toBeVisible()
  })
})
