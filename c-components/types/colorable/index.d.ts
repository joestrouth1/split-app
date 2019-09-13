declare module 'colorable' {
  /** Array of color strings or object with color string values */
  type ColorList = string[] | { [name: string]: string }

  interface ColorableOptions {
    /**
     * If true, result will be a smaller object that only includes
     * hex value color strings, a name for each color (if an object was passed),
     * contrast, and accessibility values. When set to false, the result also
     * includes the entire Color object for each color, which includes other
     * properties and methods for color manipulation
     * */
    compact?: boolean
    /**
     * When set, the colorable function only returns combinations that have a
     * contrast above this value. This is useful for only seeing combinations
     * that pass a minimum contrast level.
     */
    threshold?: number
    /**
     * When set to true, the array of colors will be de-duplicated.
     */
    uniq?: boolean
  }

  interface ColorResult {
    hex: string
    name?: string
    combinations: ColorComparison[]
  }
  interface ColorComparison {
    hex: string
    name?: string
    contrast: number
    accessibility: {
      aa: boolean
      aaLarge: boolean
      aaa: boolean
      aaaLarge: boolean
    }
  }
  function colorable(
    colors: ColorList,
    options?: ColorableOptions
  ): ColorResult[]
  export = colorable
}
