/**@jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Icon } from 'c-components'
import { ComponentProps, ReactNode } from 'react'

type IconName = ComponentProps<typeof Icon>['name']

interface TabBarItemProps {
  /** Which icon to display */
  icon: IconName
  /** Where to navigate to on tap */
  href: string
  /** Text to display below the icon */
  children: ReactNode
  /**
   * Color to fill the icon and text with
   * @default 'text'
   */
  fill?: string
}

export function TabBarItem({
  icon,
  href,
  children,
  fill = 'text',
}: TabBarItemProps) {
  return (
    <Link
      to={href}
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
        flex: '1 0 44px',
        alignItems: 'center',
        variant: 'type.hint',
        textDecoration: 'none',
        textAlign: 'center',
        px: 1,
        color: fill,
      }}
    >
      <Icon
        name={icon}
        alt=""
        width={24}
        height={24}
        sx={{ mb: 1 }}
        fill={fill}
      />
      {children}
    </Link>
  )
}
