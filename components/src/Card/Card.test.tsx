import React from 'react'
import { render } from '../test-utils'
import { Card } from '.'

describe('Card', () => {
  it(`Renders its children without throwing`, () => {
    const STRING_CHILD = `I'm in a card!`
    const { getByText } = render(
      <Card variant="radio">
        <p>{STRING_CHILD}</p>
      </Card>
    )

    expect(getByText(STRING_CHILD)).toBeVisible()
  })
})
