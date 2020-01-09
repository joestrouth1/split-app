/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import {
  HTMLAttributes,
  ReactNode,
  ChangeEventHandler,
  createContext,
} from 'react'
// import { RadioOption } from '../RadioOption'

interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * User-facing field name
   */
  label?: string
  /** Field name, shown as key in FormData and used to link all RadioGroupOptions */
  name: string
  /** RadioOptions to render */
  children: ReactNode
  /** Currently selected value */
  value?: unknown
  onChange?: ChangeEventHandler<HTMLInputElement>
}

type RadioContext = {
  name: string
  value?: unknown
  onChange?: ChangeEventHandler<HTMLInputElement>
}
export const RadioContext = createContext<RadioContext>({
  name: '',
})

/**
 * Group of RadioOptions where a maximum of one can be selected.
 */
export const RadioGroup = ({
  children,
  name,
  value,
  onChange,
  ...props
}: RadioGroupProps) => {
  return (
    <RadioContext.Provider
      value={{
        name: name,
        value: value,
        onChange: onChange,
      }}
    >
      <Flex sx={{ flexFlow: 'column nowrap', position: 'relative' }}>
        {props.label && (
          <p sx={{ variant: 'type.label', mb: 0 }}>{props.label}</p>
        )}
        <Flex {...props}>{children}</Flex>
      </Flex>
    </RadioContext.Provider>
  )
}
