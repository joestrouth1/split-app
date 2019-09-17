/**@jsx jsx */
import { jsx } from 'theme-ui'
import { Header as BaseHeader, Logo } from 'c-components'
import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'gatsby'

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
        <Logo
          alt="Company Name"
          sx={{
            py: [2],
            maxWidth: 217,
            height: 'auto',
          }}
        />
      </Link>
    }
    {...props}
  >
    {children}
  </BaseHeader>
)
