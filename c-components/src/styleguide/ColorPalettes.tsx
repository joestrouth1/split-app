/**@jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import colorable from 'colorable'
import { colors } from '../theme/colors'
import merge from 'lodash/merge'
import reduce from 'lodash/reduce'

function isObject(value: unknown) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

const flattenKeys = (obj: any, path: string[] = []): { [k: string]: string } =>
  !isObject(obj)
    ? { [path.join('.')]: obj }
    : reduce(
        obj,
        (acc: any, next: any, key: any) =>
          merge(acc, flattenKeys(next, [...path, key])),
        {}
      )

const comparisons = colorable(colors, {
  uniq: true,
  compact: true,
})

export function ColorPalette() {
  const {
    theme: { colors: themeColors },
  } = useThemeUI()
  const colors = flattenKeys(themeColors)

  const result = colorable(colors, {
    uniq: true,
    compact: true,
    threshold: 4.5,
  })

  const withCombinationsByLevel = result.map(color => {
    const initialValue: { [k: string]: any } = {}
    return {
      ...color,
      combinations: color.combinations.reduce((acc, comparison) => {
        for (const level of Object.keys(
          comparison.accessibility
        ) as (keyof typeof comparison.accessibility)[]) {
          if (comparison.accessibility[level]) {
            if (Array.isArray(acc[level])) {
              acc[level].push(comparison)
            } else {
              acc[level] = [comparison]
            }
          }
        }
        return acc
      }, initialValue),
    }
  })

  return (
    <div>
      {withCombinationsByLevel.map(({ hex, name, combinations }) => {
        return (
          <div key={name}>
            <div
              sx={{
                width: 64,
                height: 64,
                display: 'inline-block',
                backgroundColor: hex,
                borderRadius: 4,
              }}
            />
            <p>
              <span
                sx={{
                  color: 'text',
                  textTransform: 'uppercase',
                }}
              >
                {name}
              </span>
              <br />
              <span
                sx={{
                  color: 'grays.7',
                }}
              >
                {hex}
              </span>
            </p>
            <p>Combinations by level:</p>
            {Object.entries(combinations).map(([level, colors]) => {
              return [
                <p
                  sx={{
                    fontSize: 2,
                  }}
                  key={`${name}-level_${level}`}
                >
                  {level}
                </p>,
                ...colors.map((color: { name: string; hex: string }) => {
                  return (
                    <div
                      key={color.name}
                      sx={{
                        backgroundColor: color.hex,
                        padding: 16,
                        color: hex,
                      }}
                    >
                      {color.name} | {color.hex}
                    </div>
                  )
                }),
              ]
            })}
          </div>
        )
      })}
      {/* <output>
        <pre>{JSON.stringify(withCombinationsByLevel, null, 2)}</pre>
      </output> */}
    </div>
  )
}
