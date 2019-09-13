import React from 'react'
import { render } from '@testing-library/react'
import { TextField } from './TextField'

const BasicExample = (
  <TextField label="Social Security Number" hint="123-45-6789" type="text" />
)

describe('TextField', () => {
  it('Displays given label', () => {
    const { getByLabelText } = render(BasicExample)
    expect(getByLabelText('Social Security Number')).toBeVisible()
  })

  it('Displays string hint', () => {
    const { getByText } = render(BasicExample)
    expect(getByText('123-45-6789')).toBeVisible()
  })

  it('Displays custom hint', () => {
    const Hint = (
      <div sx={{ display: 'flex' }}>
        <img src="https://placebear.com/16/16" alt="" sx={{ mr: 1 }} />
        <span sx={{ flex: 1 }}>We take your privacy seriously.</span>
      </div>
    )

    const { getByText } = render(
      <TextField
        label="Email address"
        hint={Hint}
        type="email"
        sx={{ width: '100%' }}
      />
    )
    expect(getByText('We take your privacy seriously.')).toBeVisible()
  })
})
