/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render } from '../test-utils'
import { TabBar } from '.'
import { Icon } from '../Icon'

describe('TabBar', () => {
  it('Renders its children', () => {
    const TEXT = 'Bummer'
    const { getByText } = render(
      <TabBar label="Testing">
        <a href="/">
          <Icon name="frown" alt="" />
          <span>{TEXT}</span>
        </a>
      </TabBar>
    )

    expect(getByText(TEXT)).toBeVisible()
  })
})
