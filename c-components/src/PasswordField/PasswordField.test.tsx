import React from 'react'
import { render, act, fireEvent } from '@testing-library/react'
import { PasswordField } from './PasswordField'

const VALUE = 'super-secret123'
const MASK = '*'
const MASKED_VALUE = MASK.repeat(VALUE.length)

describe('PasswordField', () => {
  it('Displays masked value by default', () => {
    const { queryByDisplayValue, getByDisplayValue } = render(
      <PasswordField value={VALUE} mask={MASK} />
    )
    expect(queryByDisplayValue(VALUE)).toBeNull()
    expect(getByDisplayValue(MASKED_VALUE)).toBeVisible()
  })

  it('Displays unmasked value when asked', () => {
    /* TODO: add Icon, click to show, test that instead of example w/ prop */
    const Example = () => {
      const [isShowing, setIsShowing] = React.useState(false)
      return (
        <React.Fragment>
          <button onClick={() => setIsShowing(!isShowing)}>Show</button>
          <PasswordField show={isShowing} value={VALUE} mask={MASK} />
        </React.Fragment>
      )
    }
    const { queryByDisplayValue, getByDisplayValue, getByText } = render(
      <Example />
    )

    expect(queryByDisplayValue(VALUE)).toBeNull()

    const button = getByText('Show')

    act(() => {
      fireEvent.click(button)
    })

    expect(getByDisplayValue(VALUE)).toBeVisible()
  })
})
