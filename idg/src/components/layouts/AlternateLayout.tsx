import React, { ReactNode } from 'react'

interface AlternateLayoutProps {
  children: ReactNode
}

const AlternateLayout = ({ children }: AlternateLayoutProps) => (
  <div>
    <h1>
      Alternate layout
      {children}
    </h1>
  </div>
)

export { AlternateLayout }
