import { createContext, useState, Dispatch, SetStateAction } from 'react'

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

interface RoutingContextValue {
  currentFlow: UserFlow
  setCurrentFlow: Dispatch<SetStateAction<UserFlow>>
  routes: Route[]
}

const initialRoutingState: RoutingContextValue = {
  currentFlow: UserFlow.ORGANIC,
  routes,
  setCurrentFlow: () => {
    return
  },
}

const RoutingContext = createContext(initialRoutingState)

const useRoutingState = (
  initialState = initialRoutingState
): RoutingContextValue => {
  const [currentFlow, setCurrentFlow] = useState(initialState.currentFlow)
  const { routes } = initialState
  return { routes, currentFlow, setCurrentFlow }
}

export {
  RoutingContext,
  initialRoutingState,
  UserFlow,
  routes,
  useRoutingState,
}
