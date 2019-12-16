/**@jsx jsx */
import { jsx, Box } from 'theme-ui'
import { HTMLAttributes, ReactNode, useMemo } from 'react'
import { Icon } from '../Icon'
import { uuid } from '../utils/uuid'
import { defaultTheme } from '../theme'

type SelectVariant = keyof typeof defaultTheme['selects']

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  /**
   * Predefined variant to use, defined in theme.selects
   */
  variant?: SelectVariant
  children: ReactNode
  /**
   * Informative label to display above the input
   */
  label: string
  /**
   * Additional info to help the user; displayed below the input
   */
  hint?: ReactNode
  /**
   * Name of the input, used for input's name, id, and label[htmlFor]
   * @default uuid()
   */
  name?: string
  /**
   * Error text to display. If defined, the component will appear invalid
   */
  error?: string
}
export const Select = ({
  variant = 'default',
  children,
  className,
  name: nameProp,
  label,
  hint,
  error,
  ...props
}: SelectProps) => {
  const localVariant = `selects.${variant}`

  // only generate a UUID name if name is not passed.
  // Memoize it so it doesn't generate a new one each render
  const name = useMemo(() => {
    if (nameProp) return nameProp
    return uuid()
  }, [nameProp])

  const backgroundColor = error ? defaultTheme.colors.reds[1] : 'white'
  const textColor = error ? defaultTheme.colors.red : defaultTheme.colors.text

  return (
    <Box className={className}>
      <label
        htmlFor={name}
        sx={{
          variant: 'type.label',
          display: 'block',
        }}
      >
        {label}
      </label>
      <select
        {...props}
        sx={{
          variant: localVariant,
          mb: hint || error ? 2 : 0,
          borderBottomColor: error ? 'red' : 'grays.7',
          color: textColor,
          backgroundColor,
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='${textColor.replace(
            '#',
            '%23'
          )}' viewBox='0 0 32 32'><path d='M 6.90625 6.59375 L 6.1875 7.28125 L 2.28125 11.1875 L 1.59375 11.90625 L 16 26.3125 L 30.40625 11.90625 L 29.71875 11.1875 L 25.8125 7.28125 L 25.09375 6.59375 L 16 15.6875 Z M 6.875 9.4375 L 15.28125 17.8125 L 16 18.5 L 16.71875 17.8125 L 25.125 9.4375 L 27.5625 11.875 L 16 23.46875 L 4.4375 11.875 Z'/></svg>"),
  linear-gradient(to bottom, ${backgroundColor} 0%, ${backgroundColor} 100%)`,
          backgroundRepeat: 'no-repeat, repeat',
          backgroundPosition: 'right 1rem top 50%, 0 0',
          backgroundSize: '1rem auto, 100%',
        }}
        aria-describedby={hint ? `input-${name}__hint` : undefined}
        id={name}
        name={name}
      >
        {children}
      </select>
      {hint && (
        <div
          sx={{
            variant: 'type.hint',
            mb: error ? 1 : 0,
          }}
          id={`input-${name}__hint`}
        >
          {hint}
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
