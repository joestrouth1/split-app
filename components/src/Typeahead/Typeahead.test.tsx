/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render } from '../test-utils'
import { Typeahead } from '.'

describe('Typeahead', () => {
  it('renders without throwing', () => {
    expect(() => render(<Typeahead />)).not.toThrow()
  })
})
