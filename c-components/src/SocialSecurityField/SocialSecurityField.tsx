/**@jsx jsx */
import { jsx } from 'theme-ui'
import { useState, forwardRef, ReactNode } from 'react'
import { Rifm } from 'rifm'
import { TextField, TextFieldProps } from '../TextField'

const parseDigits = (str: string) => (str.match(/\d+/g) || []).join('')
const formatDate = (str: string) => {
  const digits = parseDigits(str)
  const chars = digits.split('')
  return chars
    .reduce(
      (r, v, index) => (index === 3 || index === 5 ? `${r}-${v}` : `${r}${v}`),
      ''
    )
    .substr(0, 11)
}
const addMask = (str: string) => {
  const digits = parseDigits(str)
  const firstThree = digits.slice(0, 3).padEnd(3, '_')
  const middleTwo = digits.slice(3, 5).padEnd(2, '_')
  const lastFour = digits.slice(5, 9).padEnd(4, '_')
  return `${firstThree}-${middleTwo}-${lastFour}`
}

export type SocialSecurityFieldRef = HTMLInputElement

interface SocialSecurityFieldProps
  extends Omit<TextFieldProps, 'onChange' | 'label' | 'hint'> {
  /** Called with the formatted value, _not_ the actual event. */
  onChange?: (value: string) => void
  /**
   * Identifying text to show above the input.
   * @default "Social Security Number"
   */
  label?: string
  /**
   * Text to show below the input, as a clue.
   * @default "123-45-6789"
   */
  hint?: string | ReactNode
}

/**
 * A form field for Social Security Numbers, with masking & validation.
 */
export const SocialSecurityField = forwardRef<
  SocialSecurityFieldRef,
  SocialSecurityFieldProps
>(({ onChange, ...props }, ref) => {
  const [masked, setMasked] = useState('')
  const handleChange = (newMasked: string) => {
    setMasked(newMasked)
    onChange && onChange(newMasked)
  }

  return (
    <Rifm
      accept={/[\d]/g}
      format={formatDate}
      replace={addMask}
      value={masked}
      onChange={handleChange}
    >
      {({ value, onChange }) => (
        <TextField
          label={'Social Security Number'}
          hint={'123-45-6789'}
          {...props}
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}"
          value={value}
          onChange={onChange}
          ref={ref}
        />
      )}
    </Rifm>
  )
})

SocialSecurityField.displayName = 'SocialSecurityField'
