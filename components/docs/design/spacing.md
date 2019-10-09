When designing the space in or around a component, there are an infinite number
of values one could choose. Decisions take longer and are more difficult as the
number of options increases. It's not clear when 10, or 12, or 15px is the
'right' choice.

Choosing from a limited set of spacing values saves everyone time and effort.
It helps maintain a harmonious visual rhythm on the page and to avoid bloating
the codebase with "magic numbers".

Every component is designed with spacing based on an 8pt scale.

When creating something new, you'll rarely need to try more than 3 values. Pick
one from the scale that seems closest, then try one bigger and one smaller.

```jsx noeditor
import { defaultTheme } from 'components'
import { WidthContext } from 'components/styleguide/Wrapper'
import { useContext, useEffect } from 'react'
const { space } = defaultTheme
function SpacingScale() {
  const { widths, setWidth } = useContext(WidthContext)
  useEffect(() => {
    setWidth(widths['iPad'])
  }, [])

  return (
    <div
      sx={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        m: -2,
      }}
    >
      {space.map((size, index) => {
        return (
          <div sx={{ flex: 0, m: 2, display: 'inline-block' }} key={size}>
            {size}px
            <div
              sx={{
                border: theme => `1px solid ${theme.colors.accent}`,
                width: size,
                height: size,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

;<SpacingScale />
```
