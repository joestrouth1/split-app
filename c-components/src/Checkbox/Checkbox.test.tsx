import React from 'react'
import { render } from '../test-utils'
import { Checkbox } from './Checkbox'

describe('Checkbox renders', () => {
  it(`Renders its label`, () => {
    const LABEL_TEXT = 'Check me'
    const { getByLabelText } = render(
      <Checkbox name="option1">{LABEL_TEXT}</Checkbox>
    )

    expect(getByLabelText(LABEL_TEXT)).toBeVisible()
  })
})
