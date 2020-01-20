/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useCombobox } from 'downshift'
import { useState, ReactNode } from 'react'
import { Icon } from '../Icon'
import { useFieldColors } from '../hooks/forms'

interface TypeaheadProps {
  /**
   * Informative label text to display above the input
   */
  label: ReactNode
  /**
   * Additional info to help the user; displayed below the input
   */
  hint?: ReactNode
  /**
   * Error text to display. If defined, the component will appear invalid
   */
  error?: ReactNode
  /**
   * Warning text to display. If defined, the component will appear potentially invalid
   */
  warning?: ReactNode
  /**
   * List of values to suggest in the dropdown
   */
  items: string[]
  /**
   * Initial value of the input
   */
  defaultValue?: string
  /**
   * Controls if/how the browser will offer autocomplete.
   */
  autoComplete?: string
  required?: boolean
  /**
   * Change handler called with the latest input value.
   */
  onChange?: (value: string) => void
  className?: string
  /**
   * TODO:
   * - [] add ability to fully control it by passing value
   */
}

export const Typeahead = ({
  items,
  error,
  label,
  hint,
  warning,
  defaultValue = '',
  onChange,
  className,
  autoComplete,
  required,
}: TypeaheadProps) => {
  const [inputItems, setInputItems] = useState(items)
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    initialInputValue: defaultValue,
    onInputValueChange: ({ inputValue = '' }) => {
      setInputItems(
        items.filter(item => {
          return item.toLowerCase().startsWith(inputValue.toLowerCase())
        })
      )
      onChange && onChange(inputValue)
    },
  })

  const hasBottomLine = hint || error || warning

  const { backgroundColor, textColor, borderColor } = useFieldColors({
    error,
    warning,
  })

  return (
    <Flex
      sx={{ position: 'relative', flexFlow: 'column nowrap' }}
      className={className}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        {...getLabelProps({
          sx: {
            variant: 'type.label',
          },
        })}
      >
        {label}
      </label>
      <Flex
        {...getComboboxProps({
          sx: { flexFlow: 'row nowrap', position: 'relative' },
        })}
      >
        <input
          {...getInputProps({
            autoComplete,
            required,
            sx: {
              flex: '1 0 auto',
              appearance: 'none',
              boxSizing: 'border-box',
              width: '100%',
              py: 3,
              pl: 3,
              pr: 3,
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
            },
          })}
        />
        <button
          {...getToggleButtonProps({
            type: 'button',
            sx: {
              variant: 'buttons.base',
              backgroundColor: 'transparent',
              position: 'absolute',
              top: 0,
              right: 0,
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 3,
            },
          })}
          aria-label={'toggle menu'}
        >
          <Icon
            name="chevron-down"
            alt=""
            width={24}
            height={24}
            fill={textColor}
          />
        </button>
      </Flex>
      {hasBottomLine && (
        <div sx={{ my: 2 }}>
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
        </div>
      )}
      <ul
        {...getMenuProps({
          sx: {
            maxHeight: '180px',
            overflowY: 'auto',
            width: '100%',
            margin: 0,
            borderTop: 0,
            background: 'white',
            position: 'absolute',
            zIndex: 1000,
            listStyle: 'none',
            padding: 0,
            top: '100%',
          },
        })}
      >
        {isOpen &&
          inputItems.map((item, index) => {
            const isHighlighted = highlightedIndex === index
            return (
              <li
                key={`${item}${index}`}
                {...getItemProps({
                  item,
                  index,
                  sx: {
                    variant: 'type.body',
                    backgroundColor: isHighlighted ? 'primary' : 'background',
                    color: isHighlighted ? 'white' : 'text',
                    p: 2,
                    borderBottomWidth: 1,
                    borderBottomStyle: 'solid',
                    borderBottomColor: 'grays.2',
                    '&:last-of-type': {
                      borderBottom: 'none',
                    },
                  },
                })}
              >
                {item}
              </li>
            )
          })}
      </ul>
    </Flex>
  )
}
