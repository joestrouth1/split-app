import React from 'react'
import { render } from '../test-utils'
import { Checkbox } from '.'

const LABEL_TEXT = 'Check me please'

describe('Checkbox renders', () => {
  it(`Renders its label`, () => {
    const { getByLabelText } = render(
      <Checkbox name="option1">{LABEL_TEXT}</Checkbox>
    )

    expect(getByLabelText(LABEL_TEXT)).toBeVisible()
  })

  it(`generates a name if not given one`, () => {
    const { getByLabelText } = render(<Checkbox>{LABEL_TEXT}</Checkbox>)
    const input = getByLabelText(LABEL_TEXT) as HTMLInputElement

    const name = input.name

    expect(name).toBeDefined()
    expect(name).toHaveLength(36)
  })
})
