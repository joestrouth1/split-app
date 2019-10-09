/**@jsx jsx */
import { ReactNode, useReducer } from 'react'
import { jsx, ThemeProvider, Layout, Styled } from 'theme-ui'
import ReactModal from 'react-modal'
import { defaultTheme, TabBar } from 'components'
import { Header } from '../header'
import { TabBarItem } from '../tab-bar-item'
import './layout-base.css'
import {
  ModalContext,
  modalReducer,
  initialModalState,
} from '../../contexts/modal'

// This element won't exist when rendering isolated components during testing
if (process.env.NODE_ENV !== 'test') {
  ReactModal.setAppElement('#___gatsby')
}

export interface SplashLayoutProps {
  children: ReactNode
}

export const SplashLayout = ({ children }: SplashLayoutProps) => {
  const [modalState, modalDispatch] = useReducer(
    modalReducer,
    initialModalState
  )

  return (
    <ThemeProvider theme={{ ...defaultTheme, useCustomProperties: false }}>
      <ModalContext.Provider value={modalDispatch}>
        <Styled.root>
          <Layout
            sx={{
              bg: 'background',
              pb: 5,
            }}
          >
            <Header />
            <TabBar
              label="Where to start"
              sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
                background: 'transparent',
              }}
            >
              <TabBarItem icon="home" href="/">
                Home
              </TabBarItem>
              <TabBarItem icon="sign-up" href="/basic-information">
                Apply now
              </TabBarItem>
              <TabBarItem icon="menu" href="/table-of-contents">
                Pages
              </TabBarItem>
            </TabBar>
            {children}
            <ReactModal
              isOpen={modalState.isOpen}
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true}
              shouldReturnFocusAfterClose={true}
              onRequestClose={() => modalDispatch({ type: 'CLOSE' })}
              className="react-modal__content"
              overlayClassName="react-modal__overlay"
            >
              {modalState.content}
            </ReactModal>
          </Layout>
        </Styled.root>
      </ModalContext.Provider>
    </ThemeProvider>
  )
}
