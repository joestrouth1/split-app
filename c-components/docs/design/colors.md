Designing with accessibility in mind helps reduce the need for costly redesigns, audits, and customer support issues. We aim to give every user a good experience from day one.

What follows is a list of accessible color combinations, organized by contrast level:

- AA: What we aim for. Suitable for normal body text and larger. Greater than 4.5 contrast.
- AA Large: Suitable for bold text or larger than 24px. Greater than 3 contrast.
- AAA: The strictest standard. Bonus points for using these. Greater than 7 contrast.
- AAA Large: Same as AA. Bold text or text larger than 24px that would otherwise meet AA standards. Greater than 4.5.

```md static
TODO:

- Toggle visibility of each level, for each color.
- Comparisons for full color scales, not just core values.
```

## Core colors

```jsx noeditor
import { Card, defaultTheme } from 'c-components'
import { comparisons } from 'c-components/styleguide/ColorComparisons'
const { colors } = defaultTheme

const colorEntries = Object.entries(colors)

const mainColors = colorEntries.filter(
  ([name, value]) => typeof value === 'string'
)

;<>
  {mainColors.map(([name, value]) => {
    const currentCombinations = comparisons.find(
      color => color.hex === value.toUpperCase()
    ).combinations
    const byLevel = {
      aa: currentCombinations.filter(({ accessibility }) => accessibility.aa),
      aaLarge: currentCombinations.filter(
        ({ accessibility }) => accessibility.aaLarge
      ),
    }
    return (
      <div>
        <h3 sx={{ variant: 'type.label', textTransform: 'uppercase', mb: 2 }}>
          {name} - {value}
        </h3>
        <div
          sx={{
            height: 64,
            width: 64,
            backgroundColor: value,
            borderColor: 'black',
            borderWidth: 1,
            borderStyle: 'solid',
            mb: 2,
          }}
        />
        {Object.entries(byLevel).map(([level, colors]) => {
          const isEmpty = colors.length === 0

          return (
            <div sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
              <h4
                sx={{
                  variant: 'type.label',
                  textTransform: 'uppercase',
                  mb: 2,
                }}
              >
                {level}
              </h4>
              {isEmpty ? (
                <p>No matches</p>
              ) : (
                <div>
                  {colors.map(({ hex, name, contrast }, index) => (
                    <p
                      sx={{
                        backgroundColor: hex,
                        variant: 'type.body',
                        color: value,
                        p: 2,
                      }}
                    >
                      {name} - {hex} |{' '}
                      {Math.round(contrast * 100 + Number.EPSILON) / 100}
                      <br />
                      Doggo ipsum maximum borkdrive blep.
                    </p>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  })}
</>
```
