/**@jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { ReactNode, useContext, Fragment } from 'react'
import { Icon, Button } from 'c-components'
import { ModalContext } from '../contexts/modal'

interface ModalContentProps {
  children: ReactNode
}

const ModalContent = ({ children }: ModalContentProps) => {
  const dispatch = useContext(ModalContext)

  return (
    <Fragment>
      <Button
        variant="link"
        onClick={() => dispatch({ type: 'CLOSE' })}
        sx={{ position: 'absolute', top: 16, right: 16 }}
      >
        <Icon name="times" alt="Close modal" />
      </Button>
      <Styled.root sx={{ maxHeight: '100%', overflow: 'auto' }}>
        {children}
      </Styled.root>
    </Fragment>
  )
}

export { ModalContent }
