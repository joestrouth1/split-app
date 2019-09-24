import { useCallback } from 'react'

/**
 * For setting / merging refs
 * @see https://github.com/facebook/react/issues/13029#issuecomment-497629971
 */

type MutableRef<T> =
  | ((instance: T | null) => void)
  | { current: T | null }
  | null

// simplified commitAttachRef from https://github.com/facebook/react/blob/1b752f1914b677c0bb588d10a40c12f332dfd031/packages/react-reconciler/src/ReactFiberCommitWork.js#L693
export function setRef<T>(ref: MutableRef<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref !== null) {
    ref.current = value
  }
}

export function useForkRef<T>(
  refA: MutableRef<T> | null,
  refB: MutableRef<T> | null
) {
  /**
   * This will create a new function if the ref props change.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return useCallback(
    instance => {
      setRef(refA, instance)
      setRef(refB, instance)
    },
    [refA, refB]
  )
}
