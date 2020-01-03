/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render } from '../test-utils'
import { RadioGroup } from '.'
// import { RadioOption } from '../RadioOption'

describe('RadioGroup', () => {
  it('renders without throwing', () => {
    const { asFragment } = render(<RadioGroup name="test">Text</RadioGroup>)
    expect(asFragment()).toMatchSnapshot()
  })
})
