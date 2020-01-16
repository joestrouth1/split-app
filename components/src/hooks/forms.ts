import { ReactNode } from 'react'

type FieldStates = {
  error?: ReactNode
  warning?: ReactNode
}
export const useFieldColors = (states: FieldStates) => {
  const { error, warning } = states

  let backgroundColor = 'white'
  let borderColor = 'grays.7'
  let textColor = 'text'
  if (error) {
    backgroundColor = 'reds.1'
    borderColor = 'red'
    textColor = 'red'
  } else if (warning) {
    borderColor = 'warning'
    textColor = 'warning'
  }
  return { backgroundColor, borderColor, textColor }
}
