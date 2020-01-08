/**@jsx jsx */
import { jsx } from 'theme-ui'
import { useContext, forwardRef, ReactNode, AnchorHTMLAttributes } from 'react'
import { ModalContext } from '../contexts/modal'

interface ModalLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** The component/content to render in the modal */
  modalContent: ReactNode
  /** The "link" text or other content to display */
  children: ReactNode
}

type ModalLinkRef = HTMLAnchorElement

/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Looks and flows like a text link, but has the role of a button.
 * @description Buttons are for actions on the current page, while links are expected to trigger navigation. Opening a modal does not cause navigation; hence, button.
 */
const ModalLink = forwardRef<ModalLinkRef, ModalLinkProps>(
  ({ modalContent, children, ...props }: ModalLinkProps, ref) => {
    const dispatch = useContext(ModalContext)
    const openModal = (content: ReactNode) => {
      dispatch({ type: 'SET_CONTENT', payload: content })
      dispatch({ type: 'OPEN' })
    }
    return (
      <a
        role="button"
        sx={{ variant: 'links.default' }}
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault()
            openModal(modalContent)
          }
        }}
        onClick={e => {
          e.preventDefault()
          openModal(modalContent)
        }}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    )
  }
)
/* eslint-enable jsx-a11y/anchor-is-valid */

ModalLink.displayName = 'ModalLink'

export { ModalLink }
