/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useCombobox } from 'downshift'
import { useState, ReactNode } from 'react'
import { Icon } from '../Icon'

interface TypeaheadProps {
  /**
   * Informative label to display above the input
   */
  label: ReactNode
  /**
   * Additional info to help the user; displayed below the input
   */
  hint?: ReactNode
  /**
   * Error text to display. If defined, the component will appear invalid
   */
  error?: string
  /**
   * List of items to select from
   */
  items: string[]
  /**
   * Whether the list of options is visible or not
   */
  isOpen?: boolean
}

export const Typeahead = ({
  items,
  isOpen: isOpenProp,
  ...props
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
    onInputValueChange: ({ inputValue = '' }) => {
      setInputItems(
        items.filter(item => {
          return item.toLowerCase().startsWith(inputValue.toLowerCase())
        })
      )
    },
  })
  const [error, setError] = useState(false)

  return (
    <Flex sx={{ position: 'relative', flexFlow: 'column nowrap' }}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        {...getLabelProps({
          sx: {
            variant: 'type.label',
          },
        })}
      >
        Choose an element:
      </label>
      <Flex
        {...getComboboxProps({
          sx: { flexFlow: 'row nowrap', position: 'relative' },
        })}
      >
        <input
          {...getInputProps({
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
              borderBottomColor: error ? 'red' : 'grays.7',
              borderBottomStyle: 'solid',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              backgroundColor: error ? 'reds.1' : 'white',
              boxShadow: 'medium',
              variant: 'type.body',
              color: error ? 'red' : 'text',
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
          <Icon name="chevron-down" alt="" width={24} height={24} />
        </button>
      </Flex>
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
        {(isOpen || isOpenProp) &&
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
