/**@jsx jsx */
import { jsx } from 'theme-ui'
import { Header as BaseHeader } from 'components'
import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'gatsby'
import { Wordmark } from './wordmark'

type HeaderProps = Omit<ComponentPropsWithoutRef<typeof BaseHeader>, 'logo'>

export const Header = ({ children, ...props }: HeaderProps) => (
  <BaseHeader
    logo={
      <Link
        to="/table-of-contents"
        sx={{
          lineHeight: 1,
        }}
      >
        <Wordmark
          alt="Company name"
          width={124.8}
          sx={{ py: [2] }}
          fill="greens.7"
        />
      </Link>
    }
    {...props}
  >
    {children}
  </BaseHeader>
)
