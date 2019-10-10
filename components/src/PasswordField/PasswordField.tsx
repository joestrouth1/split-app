/**@jsx jsx */
import { jsx } from 'theme-ui'
import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  ChangeEventHandler,
  InputHTMLAttributes,
} from 'react'
import { useForkRef } from '../utils/useForkRef'

export interface PasswordFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Character(s) to display instead of each password character
   * @default '•'
   */
  mask?: string
  /**
   * How long to wait after input before hiding each character
   * @default 1000
   */
  timeout?: number
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * If true, displays legible user input, unmasked
   * @default false
   */
  show?: boolean
}

export type PasswordFieldRef = HTMLInputElement

/**
 * Text field that can hide/reveal password contents.
 *
 * Each character will be shown unmasked for a brief period after it's typed.
 *
 * You probably want [TextField](./#/TextField) instead, unless you're building something very custom.
 */
export const PasswordField = forwardRef<PasswordFieldRef, PasswordFieldProps>(
  (
    {
      value: valueProp = '',
      timeout = 1000,
      mask = '•',
      show = false,
      onChange: onChangeProp,
      ...props
    },
    forwardedRef
  ) => {
    const [unmasked, setUnmasked] = useState<string>(String(valueProp))
    const [value, setValue] = useState<string>(
      mask.repeat(String(valueProp).length)
    )

    useEffect(() => {
      if (valueProp !== unmasked) {
        setUnmasked(String(valueProp))
        setValue(mask.repeat(String(valueProp).length))
      }
    }, [mask, valueProp])
    useEffect(() => {
      setValue(mask.repeat(value.length))
    }, [mask])

    const localRef = useRef<HTMLInputElement>(null)
    const inputRef = useForkRef<HTMLInputElement>(localRef, forwardedRef)

    const timer = useRef<number>()

    const onChange: ChangeEventHandler<HTMLInputElement> = e => {
      timer.current && window.clearTimeout(timer.current)

      // Save the current cursor position to restore after masking
      const cursorPos = (localRef.current && localRef.current.selectionEnd) || 0

      const value = e.target.value

      // This is going to be the new unmasked value
      const newValue = value.replace(
        new RegExp(
          `${cursorPos ? `(^\\${mask}{1,${cursorPos}})|` : ''}(\\${mask}+)`,
          'g'
        ),
        (match, _part, offset) => {
          if (!offset && cursorPos) return unmasked.substr(0, match.length)
          else return unmasked.substr(-match.length)
        }
      )

      // Mask the value leaving the last character intact
      const maskedValue = value
        .split('')
        .map((c, index) => (index === cursorPos - 1 ? c : mask))
        .join('')

      setValue(maskedValue)
      setUnmasked(newValue)
      if (onChangeProp)
        onChangeProp({ ...e, target: { ...e.target, value: newValue } })

      // Restore cursor position
      if (localRef.current) {
        localRef.current.selectionStart = cursorPos
        localRef.current.selectionEnd = cursorPos
      }

      // Set a timeout to replace the last showing character
      timer.current = window.setTimeout(() => {
        // Save current selection
        const start = localRef.current && localRef.current.selectionStart
        const end = localRef.current && localRef.current.selectionEnd

        setValue(mask.repeat(value.length))
        if (localRef.current) {
          localRef.current.selectionStart = start
          localRef.current.selectionEnd = end
        }
      }, timeout)
    }

    return (
      <input
        ref={inputRef}
        {...props}
        type="text"
        value={show ? unmasked : value}
        onChange={onChange}
        autoComplete="new-password"
      />
    )
  }
)

PasswordField.displayName = 'PasswordField'
