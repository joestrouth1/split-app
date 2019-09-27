/**@jsx jsx */
import { jsx } from 'theme-ui'
import { useState, forwardRef } from 'react'
import { Rifm } from 'rifm'
import { TextField, TextFieldProps } from '../TextField'

const numberAccept = /[\d.]+/g
const parseNumber = (str: string) => (str.match(numberAccept) || []).join('')

const formatFloatingPointNumber = (value: string, maxDigits: number) => {
  const parsed = parseNumber(value)
  const [head, tail] = parsed.split('.')
  // Avoid rounding errors at toLocaleString as when user enters 1.239 and maxDigits=2 we
  // must not to convert it to 1.24, it must stay 1.23
  const scaledTail = tail != null ? tail.slice(0, maxDigits) : ''

  const number = Number.parseFloat(`${head}.${scaledTail}`)

  if (Number.isNaN(number)) {
    return ''
  }

  const formatted = number.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: maxDigits,
  })

  if (parsed.includes('.')) {
    const [formattedHead] = formatted.split('.')

    // skip zero at digits position for non fixed floats
    // as at digits 2 for non fixed floats numbers like 1.50 has no sense, just 1.5 allowed
    // but 1.0 has sense as otherwise you will not be able to enter 1.05 for example
    const formattedTail =
      scaledTail !== '' && scaledTail[maxDigits - 1] === '0'
        ? scaledTail.slice(0, -1)
        : scaledTail

    return `${formattedHead}.${formattedTail}`
  }
  return formatted
}

const formatCurrency = (str: string) => '$' + formatFloatingPointNumber(str, 2)

export type CurrencyFieldRef = HTMLInputElement

interface CurrencyFieldProps extends Omit<TextFieldProps, 'onChange'> {
  /** Called with the formatted value, _not_ the actual event. */
  onChange?: (value: string) => void
}

/**
 * A form field for dollar amounts, with masking & validation.
 */
export const CurrencyField = forwardRef<CurrencyFieldRef, CurrencyFieldProps>(
  ({ onChange, ...props }, ref) => {
    const [masked, setMasked] = useState('')
    const handleChange = (newMasked: string) => {
      setMasked(parseNumber(newMasked))
      onChange && onChange(newMasked)
    }

    return (
      <Rifm
        accept={/[\d.]/g}
        format={formatCurrency}
        value={masked}
        onChange={handleChange}
      >
        {({ value, onChange: rifmOnChange }) => (
          <TextField
            {...props}
            type="tel"
            value={value}
            onChange={rifmOnChange}
            ref={ref}
            maxLength={11}
            pattern="^\$[1-9][\d,]+"
          />
        )}
      </Rifm>
    )
  }
)

CurrencyField.displayName = 'CurrencyField'
