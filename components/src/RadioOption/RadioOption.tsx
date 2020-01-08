/**@jsx jsx */
import { jsx } from 'theme-ui'
import { RadioContext } from '../RadioGroup'
import { useContext, Fragment, ReactNode, HTMLAttributes, useMemo } from 'react'
import { uuid } from '../utils/uuid'

interface RadioOptionProps extends HTMLAttributes<HTMLLabelElement> {
  /** label contents */
  children: ReactNode
  value: string
  /**
   * Used to connect the input and its label.
   * @default uuid()
   */
  id?: string
}

/**
 * Radio input - used inside of RadioGroup.
 */
export const RadioOption = ({ children, ...props }: RadioOptionProps) => {
  const context = useContext(RadioContext)
  const { name, value, onChange } = context

  const id = useMemo(() => name + '-' + (props.id || uuid()), [props.id])

  return (
    <Fragment>
      <input
        type="radio"
        name={name}
        onChange={onChange}
        checked={value === props.value}
        value={props.value}
        id={id}
        sx={{
          variant: 'visuallyhidden',
          '&:focus + label, &:active + label, &:checked + label': {
            boxShadow: 'outline',
          },
        }}
      />
      <label
        htmlFor={id}
        sx={{ variant: 'cards.radio', flex: '1 1 auto' }}
        {...props}
      >
        <span sx={{ variant: 'type.label' }}>{children}</span>
      </label>
    </Fragment>
  )
}
