/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render } from '../test-utils'
import { Footer } from '.'

describe('Footer', () => {
  it('Renders', () => {
    expect(() => render(<Footer />)).not.toThrow()
  })
})
