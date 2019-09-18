import { createContext, ReactNode, Dispatch } from 'react'
interface ModalState {
  content: ReactNode
  isOpen: boolean
}

type MODAL_ACTION = 'SET_CONTENT' | 'OPEN' | 'CLOSE' | 'TOGGLE'

interface ModalAction {
  type: MODAL_ACTION
  payload?: ReactNode
}

const modalReducer = (state: ModalState, action: ModalAction) => {
  switch (action.type) {
    case 'SET_CONTENT':
      return { ...state, content: action.payload }
    case 'OPEN':
      return { ...state, isOpen: true }
    case 'CLOSE':
      return { ...state, isOpen: false }
    case 'TOGGLE':
      return { ...state, isOpen: !state.isOpen }
    default:
      return state
  }
}

const initialModalState: ModalState = { isOpen: false, content: null }
const ModalContext = createContext<Dispatch<ModalAction>>(() => {})

export { ModalContext, modalReducer, initialModalState }
