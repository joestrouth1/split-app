/**@jsx jsx */
import { jsx } from 'theme-ui'
import { useState, forwardRef, ChangeEventHandler } from 'react'
import { Rifm } from 'rifm'
import { TextField, TextFieldProps } from '../TextField'

export type DateFieldRef = HTMLInputElement

type DateFieldProps = TextFieldProps // temporary alias

const parseDigits = (str: string) => (str.match(/\d+/g) || []).join('')
const formatDate = (str: string) => {
  const digits = parseDigits(str)
  const chars = digits.split('')
  return chars
    .reduce(
      (r, v, index) => (index === 2 || index === 4 ? `${r}-${v}` : `${r}${v}`),
      ''
    )
    .substr(0, 10)
}
const addMask = (str: string) => {
  const digits = parseDigits(str)
  const days = digits.slice(0, 2).padEnd(2, '_')
  const months = digits.slice(2, 4).padEnd(2, '_')
  const years = digits.slice(4, 8).padEnd(4, '_')
  return `${days}-${months}-${years}`
}

/**
 * A form field for inputting dates.
 */
export const DateField = forwardRef<DateFieldRef, DateFieldProps>(
  (props, ref) => {
    const [masked, setMasked] = useState('')
    const handleChange = (newMasked: string) => {
      setMasked(newMasked)
      // TODO: figure out bubbling / calling parent change listener in addition to doing local logic
      if (props.onChange) props.onChange({ target: { value: newMasked } })
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
            label="Date of birth"
            type="tel"
            value={value}
            onChange={e => {
              onChange(e)
              console.log(e.target.value)
            }}
            ref={ref}
          />
        )}
      </Rifm>
    )
  }
)

DateField.displayName = 'DateField'
