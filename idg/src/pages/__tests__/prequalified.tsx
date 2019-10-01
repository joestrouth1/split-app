/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render } from '../../test-utils'
import Page from '../prequalified'

describe('Prequalified page', () => {
  it('Renders "Nice!" without throwing', () => {
    const { getByText } = render(<Page />)
    expect(getByText('Nice!')).toBeVisible()
  })
})
