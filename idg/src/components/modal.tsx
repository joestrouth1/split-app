/**@jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { ReactNode, useContext, Fragment } from 'react'
import { Icon } from 'c-components'
import { ModalContext } from '../contexts/modal'

interface ModalContentProps {
  children: ReactNode
}

const ModalContent = ({ children }: ModalContentProps) => {
  const dispatch = useContext(ModalContext)

  return (
    <Fragment>
      <Icon
        sx={{ position: 'absolute', top: 16, right: 16 }}
        name="times"
        alt="Close modal"
        onClick={() => dispatch({ type: 'CLOSE' })}
      />
      <Styled.root sx={{ maxHeight: '100%', overflow: 'auto' }}>
        {children}
      </Styled.root>
    </Fragment>
  )
}

export { ModalContent }
