/**@jsx jsx */
import { createContext } from 'react'
import { jsx } from 'theme-ui'

enum UserFlow {
  PRESCREEN = 'PRESCREEN',
  ORGANIC = 'ORGANIC',
  LOAN_BY_PHONE = 'LOAN_BY_PHONE',
}

interface Route {
  path: string
  next: {
    [K in UserFlow]: string
  }
}
const routes: Route[] = [
  {
    path: '/',
    next: {
      [UserFlow.PRESCREEN]: '/mail',
      [UserFlow.ORGANIC]: '/basic-information',
      [UserFlow.LOAN_BY_PHONE]: '/basic-information',
    },
  },
]

interface RoutingState {
  flow: UserFlow
  routes: Route[]
}

const initialRoutingState: RoutingState = { flow: UserFlow.ORGANIC, routes }
const RoutingContext = createContext(initialRoutingState)

export { RoutingContext, initialRoutingState }
