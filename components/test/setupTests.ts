import '@testing-library/jest-dom/extend-expect'
const consoleError = console.error

let consoleErrorLog: unknown[] = []

beforeEach(() => {
  consoleErrorLog = []
  // Make sure we aren't triggering React console.error calls
  // eslint-disable-next-line
  console.error = (message?: any, ...args: any[]) => {
    // NOTE: We can't throw in here directly as most console.error calls happen
    // inside promises and result in an unhandled promise rejection
    consoleErrorLog.push(
      `console.error called with args: ${[message, ...args]}`
    )
    consoleError.apply(console, [message, ...args])
  }
})

afterEach(() => {
  if (consoleErrorLog.length > 0) {
    // Not using an Error object here because the stacktrace is misleading
    throw consoleErrorLog[0]
  }

  console.error = consoleError
})
