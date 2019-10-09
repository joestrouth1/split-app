/**
 * Generates a UUIDv4
 * @see [gist](https://gist.github.com/jed/982883#file-annotated-js-L6)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function uuid(a?: any) {
  if (a) {
    return (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  //@ts-ignore
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid)
}
