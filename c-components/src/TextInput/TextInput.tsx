/**@jsx jsx */
import { jsx, Box } from 'theme-ui'
import {
  InputHTMLAttributes,
  forwardRef,
  useRef,
  useMemo,
  useState,
  useLayoutEffect,
  ReactNode,
  MouseEventHandler,
  Ref,
} from 'react'
import MaskedInput, { MaskedInputProps } from 'react-text-mask'
import { PasswordField } from '../PasswordField'
import { Icon } from '../Icon'
import { uuid } from '../utils/uuid'
import { useForkRef } from '../utils/useForkRef'

interface TextInputProps extends InputHTMLAttributes<MaskedInputProps> {
  /**
   * Informative label to display above the input
   */
  label: string
  /**
   * Name of the input, used for input's name, id, and label[htmlFor]
   * @default uuid()
   */
  name?: string
  /**
   * Additional info to help the user; displayed below the input.
   */
  hint?: ReactNode
  /**
   * Icon to show at right of input, e.g. eye for password
   */
  icon?: ReactNode
  /**
   * Function to call when Icon button is clicked
   */
  onIconClick?: MouseEventHandler<HTMLButtonElement>
}

export type TextInputRef = HTMLInputElement

/**
 * Wrapper for HTML's `input` element.
 */
export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  (
    {
      name: nameProp,
      label,
      hint,
      className,
      icon,
      placeholder = '',
      value = '',
      mask = false,
      ...props
    },
    forwardedRef
  ) => {
    const isPassword = props.type ? props.type === 'password' : false
    const Input = MaskedInput

    // If `icon` is passed, get a reference to its container and add right padding to input
    const iconRef = useRef<HTMLButtonElement>(null)
    const [iconInputPadding, setIconInputPadding] = useState<number>()
    useLayoutEffect(() => {
      if (iconRef.current) {
        setIconInputPadding(iconRef.current.clientWidth)
      }
    }, [iconRef.current])
    // Set up state and use default icon if type=password
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const iconName = showPassword ? 'eye-slash' : 'eye'
    const iconAlt = showPassword ? 'Hide password' : 'Show password'
    if (isPassword) {
      icon = icon || (
        <Icon name={iconName} alt={iconAlt} width={24} height={24} />
      )
    }

    // only generate a UUID name if name is not passed.
    // Memoize it so it doesn't generate a new one each render
    const name = useMemo(() => {
      if (nameProp) return nameProp
      return uuid()
    }, [nameProp])

    return (
      <Box className={className}>
        <label
          htmlFor={name}
          sx={{
            display: 'block',
            variant: 'type.label',
          }}
        >
          {label}
        </label>
        {/* Wrapper used to position icon relative to input */}
        <div
          sx={{
            position: 'relative',
          }}
        >
          <Input
            {...props}
            name={name}
            id={name}
            aria-describedby={hint ? `input-${name}__hint` : undefined}
            placeholder={placeholder}
            value={value}
            mask={mask}
            sx={{
              appearance: 'none',
              boxSizing: 'border-box',
              width: '100%',
              py: 3,
              pl: 3,
              pr: theme => iconInputPadding || theme.space[3],
              borderTop: 0,
              borderRight: 0,
              borderBottom: 2,
              borderLeft: 0,
              borderBottomColor: 'grays.7',
              borderBottomStyle: 'solid',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              backgroundColor: 'white',
              boxShadow: 'medium',
              variant: 'type.body',
              mb: typeof hint === 'string' ? 1 : 2,
            }}
          />
          {icon && (
            <button
              sx={{
                variant: 'buttons.base',
                backgroundColor: 'transparent',
                position: 'absolute',
                top: 0,
                right: 0,
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 3,
              }}
              onClick={
                props.onIconClick ||
                (e => {
                  e.preventDefault()
                  isPassword && setShowPassword(val => !val)
                })
              }
              ref={iconRef}
            >
              {icon}
            </button>
          )}
        </div>
        {hint && (
          <div
            sx={{
              variant: 'type.hint',
            }}
            id={`input-${name}__hint`}
          >
            {hint}
          </div>
        )}
      </Box>
    )
  }
)

TextInput.displayName = 'TextInput'