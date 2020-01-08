/**@jsx jsx */
import { ReactNode, useReducer } from 'react'
import { jsx, ThemeProvider, Layout, Styled, Container } from 'theme-ui'
import ReactModal from 'react-modal'
import { defaultTheme, TabBar } from 'components'
import { Header } from '../header'
import { Footer } from '../footer'
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
          <Layout sx={{ bg: 'grays.0', pb: 4 }}>
            <Header />
            <TabBar
              label="Where to start"
              sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
                background: 'white',
              }}
            >
              <TabBarItem icon="sign-in" href="/">
                Sign in
              </TabBarItem>
              <TabBarItem icon="sign-up" href="/basic-information">
                Apply now
              </TabBarItem>
              <TabBarItem icon="menu" href="/table-of-contents">
                Pages
              </TabBarItem>
            </TabBar>
            {children}
            <div
              sx={{
                backgroundColor: 'grays.1',
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                borderTopColor: 'grays.2',
              }}
            >
              <Container
                sx={{
                  mt: 2,
                  py: 3,
                  px: 3,
                  maxWidth: theme => theme.breakpoints[0],
                  display: 'flex',
                  flexFlow: 'column nowrap',
                  justifyContent: 'center',
                }}
              >
                <Footer />
              </Container>
            </div>
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
