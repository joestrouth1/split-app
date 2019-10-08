/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/**@jsx jsx */
import { ReactNode, useReducer } from 'react'
import { jsx, ThemeProvider, Layout, Styled } from 'theme-ui'
import ReactModal from 'react-modal'
import { defaultTheme, TabBar } from 'c-components'
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

export interface DefaultLayoutProps {
  children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [modalState, modalDispatch] = useReducer(
    modalReducer,
    initialModalState
  )

  return (
    <ThemeProvider theme={{ ...defaultTheme, useCustomProperties: false }}>
      <ModalContext.Provider value={modalDispatch}>
        <Styled.root>
          <Layout sx={{ bg: 'grays.0', pb: 5 }}>
            <Header></Header>
            <TabBar
              label="Starting points"
              sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
                background: 'white',
              }}
            >
              <TabBarItem icon="sign-in" href="/sign-in">
                Sign in
              </TabBarItem>
              <TabBarItem icon="sign-up" href="/basic-information">
                Apply now
              </TabBarItem>
              <TabBarItem icon="menu" href="/">
                Index
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
