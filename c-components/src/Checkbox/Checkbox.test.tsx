import React from 'react'
import { render } from '@testing-library/react'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it(`Renders its label without throwing`, () => {
    const LABEL_TEXT = 'Check me'
    const { getByLabelText } = render(
      <Checkbox name="option1">{LABEL_TEXT}</Checkbox>
    )

    expect(getByLabelText(LABEL_TEXT)).toBeVisible()
  })
})
