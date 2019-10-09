/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render } from '../../test-utils'
import Page from '../residential-information'

const LOCATION = {
  search: '',
}

describe('Prequalified page', () => {
  it('Renders without throwing', () => {
    const { getByText } = render(<Page location={LOCATION} />)
    expect(getByText('Where do you live?')).toBeVisible()
  })
})
