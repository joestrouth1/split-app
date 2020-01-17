/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render } from '../test-utils'
import { RadioGroup } from '.'
// import { RadioOption } from '../RadioOption'

describe('RadioGroup', () => {
  it('renders without throwing', () => {
    expect(() =>
      render(<RadioGroup name="test">Text</RadioGroup>)
    ).not.toThrow()
  })
})
