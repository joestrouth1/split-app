import React from 'react'
import { render } from '../test-utils'
import { ThemeProvider } from 'theme-ui'
import { defaultTheme } from '../theme'
import { TextField } from './TextField'

const BasicExample = (
  <ThemeProvider theme={defaultTheme}>
    <TextField label="Social Security Number" hint="123-45-6789" type="text" />
  </ThemeProvider>
)

describe('TextField renders', () => {
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
        <img src="https://placekitten.com/16/16" alt="" sx={{ mr: 1 }} />
        <span sx={{ flex: 1 }}>We take your privacy seriously.</span>
      </div>
    )

    const { getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <TextField
          label="Email address"
          hint={Hint}
          type="email"
          sx={{ width: '100%' }}
        />
      </ThemeProvider>
    )
    expect(getByText('We take your privacy seriously.')).toBeVisible()
  })
})
