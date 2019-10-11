/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render } from '../../../test-utils'
import Page from '../../link-account/scan-check'

describe('Link account - Scan check page', () => {
  it('renders without throwing', () => {
    expect(() => render(<Page />)).not.toThrow()
  })
})
