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
const flattenedColors = flattenKeys(colors)
const comparisons = colorable(flattenedColors, {
  compact: true,
}).map(color => ({ ...color, hex: color.hex.toUpperCase() }))

export { comparisons }
