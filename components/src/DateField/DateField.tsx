/**@jsx jsx */
import { jsx } from 'theme-ui'
import { useState, forwardRef } from 'react'
import { Rifm } from 'rifm'
import { TextField, TextFieldProps } from '../TextField'

const parseDigits = (str: string) => (str.match(/\d+/g) || []).join('')
const formatDate = (str: string) => {
  const digits = parseDigits(str)
  const chars = digits.split('')
  return chars
    .reduce(
      (r, v, index) => (index === 2 || index === 4 ? `${r}/${v}` : `${r}${v}`),
      ''
    )
    .substr(0, 10)
}
const addMask = (str: string) => {
  const digits = parseDigits(str)
  const days = digits.slice(0, 2).padEnd(2, '_')
  const months = digits.slice(2, 4).padEnd(2, '_')
  const years = digits.slice(4, 8).padEnd(4, '_')
  return `${days}/${months}/${years}`
}

export type DateFieldRef = HTMLInputElement

interface DateFieldProps extends Omit<TextFieldProps, 'onChange'> {
  /** Called with the formatted value, _not_ the actual event. */
  onChange?: (value: string) => void
}

/**
 * A form field for inputting dates, with masking and validation.
 */
export const DateField = forwardRef<DateFieldRef, DateFieldProps>(
  ({ onChange, ...props }, ref) => {
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
            {...props}
            type="tel"
            pattern="\d\d\/\d\d\/\d\d\d\d"
            value={value}
            onChange={onChange}
            ref={ref}
          />
        )}
      </Rifm>
    )
  }
)

DateField.displayName = 'DateField'
