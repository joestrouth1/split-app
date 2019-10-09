/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render } from '../../../test-utils'
import DecisionLogicPage from '../../link-account/decision-logic'

const Example = () => <DecisionLogicPage />

describe('Decision logic page', () => {
  it('Renders', () => {
    const { getByText } = render(<Example />)

    expect(getByText(/Decision Logic/i)).toBeVisible()
  })
})
