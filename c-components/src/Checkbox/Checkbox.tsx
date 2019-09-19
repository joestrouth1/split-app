/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { uuid } from '../utils/uuid'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Informative label to display beside the input
   */
  children: ReactNode
  /**
   * Name of the input, used for input's name, id, and label[htmlFor]
   * @default uuid()
   */
  name?: string
}

export type CheckboxRef = HTMLInputElement

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(
  ({ children, name = uuid(), className, ...props }, ref) => {
    return (
      <Flex
        className={className}
        sx={{
          flexFlow: 'row nowrap',
          alignItems: 'flex-start',
          '& + &': {
            mt: 3,
          },
        }}
      >
        <input
          {...props}
          type="checkbox"
          name={name}
          id={name}
          ref={ref}
          sx={{
            width: '1rem',
            height: '1rem',
            mr: 2,
            mt: 1,
          }}
        />
        <label
          htmlFor={name}
          sx={{
            flex: 1,
            variant: 'type.body',
            color: 'grays.8',
          }}
        >
          {children}
        </label>
      </Flex>
    )
  }
)
