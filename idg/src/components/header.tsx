/**@jsx jsx */
import { jsx } from 'theme-ui'
import { Header as BaseHeader } from 'c-components'
import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'gatsby'
import { Wordmark } from './wordmark'

type HeaderProps = Omit<ComponentPropsWithoutRef<typeof BaseHeader>, 'logo'>

export const Header = ({ children, ...props }: HeaderProps) => (
  <BaseHeader
    logo={
      <Link
        to="/"
        sx={{
          lineHeight: 1,
        }}
      >
        <Wordmark
          alt="company name"
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
