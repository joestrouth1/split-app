/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render } from '../test-utils'
import { Typeahead } from '.'

const LABEL = 'Example'
const ITEMS = ['a', 'b', 'c']

describe('Typeahead', () => {
  it('renders without throwing', () => {
    expect(() =>
      render(<Typeahead label={LABEL} items={ITEMS} />)
    ).not.toThrow()
  })
})
