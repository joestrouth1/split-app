/**@jsx jsx */
import { jsx } from 'theme-ui'
import { render } from '../test-utils'
import { Select } from '.'

test('Renders strings', () => {
  const LABEL_TEXT = 'Flavors'
  const HINT_TEXT = 'Choose your favorite'
  const ERROR_TEXT = 'That flavor is out of stock'

  const OPTIONS = [
    {
      value: 'first',
      label: 'Vanilla',
    },
    {
      value: 'second',
      label: 'Strawberry',
    },
    {
      value: 'third',
      label: 'Chocolate',
    },
  ]

  const Example = () => (
    <Select label={LABEL_TEXT} hint={HINT_TEXT} error={ERROR_TEXT}>
      {OPTIONS.map(({ label, value }) => {
        return (
          <option key={value} value={value}>
            {label}
          </option>
        )
      })}
    </Select>
  )

  const { getByLabelText, getByText } = render(<Example />)
  const label = getByLabelText(LABEL_TEXT)
  const hint = getByText(HINT_TEXT)
  const error = getByText(ERROR_TEXT)

  expect(label).toBeVisible()
  expect(hint).toBeVisible()
  expect(error).toBeVisible()
})

test('Renders custom hint content', () => {
  const HINT_TEXT = 'Choose carefully'
  const Hint = () => <strong>{HINT_TEXT}</strong>

  const { getByText } = render(
    <Select label="Choose" hint={<Hint />}>
      <option value="">An option</option>
    </Select>
  )

  const customHint = getByText(HINT_TEXT)

  expect(customHint).toBeVisible()
})
