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
} from 'react'
import { PasswordField } from '../PasswordField'
import { Icon } from '../Icon'
import { uuid } from '../utils/uuid'
import { useFieldColors } from '../hooks/forms'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Informative label to display above the input
   */
  label: ReactNode
  /**
   * Name of the input, used for input's name, id, and label[htmlFor]
   * @default uuid()
   */
  name?: string
  /**
   * Additional info to help the user; displayed below the input
   */
  hint?: ReactNode
  /**
   * Error text to display. If defined, the component will appear invalid
   */
  error?: string
  /**
   * Warning text to dipslay. If defined, the component will appear potentially invalid
   */
  warning?: ReactNode
  /**
   * Icon to show at right of input, e.g. eye for password
   */
  icon?: ReactNode
  /**
   * Function to call when Icon button is clicked
   */
  onIconClick?: MouseEventHandler<HTMLButtonElement>
}

export type TextFieldRef = HTMLInputElement

/**
 * Wrapper for HTML's `input` element.
 */
export const TextField = forwardRef<TextFieldRef, TextFieldProps>(
  (
    { name: nameProp, label, hint, error, warning, className, icon, ...props },
    ref
  ) => {
    const isPassword = props.type ? props.type === 'password' : false
    const Input = isPassword ? PasswordField : 'input'

    // If `icon` is passed, get a reference to it and add right padding to input
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

    const { backgroundColor, textColor, borderColor } = useFieldColors({
      error,
      warning,
    })

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
            show={isPassword ? showPassword : undefined}
            {...props}
            name={name}
            id={name}
            ref={ref}
            aria-describedby={hint ? `input-${name}__hint` : undefined}
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
              borderBottomColor: borderColor,
              borderBottomStyle: 'solid',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              backgroundColor,
              boxShadow: 'medium',
              variant: 'type.body',
              color: textColor,
              mb: 2,
              outlineColor: 'transparent',
              transitionProperty: 'outline-color',
              transitionDuration: '150ms',
              transitionTimingFunction: 'ease-out',
              '&:focus, &:active': {
                // outline: 0,
                outlineWidth: 2,
                outlineColor: theme => theme.colors.grays[7],
                // outlineStyle: 'solid',
              },
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
              mb: warning || error ? 1 : 0,
            }}
            id={`input-${name}__hint`}
          >
            {hint}
          </div>
        )}
        {warning && (
          <div
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              mb: error ? 1 : 0,
            }}
          >
            <Icon
              name="warning"
              alt="Warning: "
              sx={{ mr: 1, flexShrink: 0 }}
              width={16}
              height={16}
              fill="warning"
            />
            <span sx={{ variant: 'type.hint', color: 'warning' }}>
              {warning}
            </span>
          </div>
        )}
        {error && (
          <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Icon
              name="warning"
              alt="Error: "
              sx={{ mr: 1, flexShrink: 0 }}
              width={16}
              height={16}
              fill="red"
            />
            <span sx={{ variant: 'type.hint', color: 'red' }}>{error}</span>
          </div>
        )}
      </Box>
    )
  }
)

TextField.displayName = 'TextField'
