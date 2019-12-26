/**@jsx jsx */
import { jsx, Styled, ThemeProvider } from 'theme-ui'
import { Component, HTMLAttributes, ReactNode } from 'react'
import { defaultTheme } from '../theme'
import 'typeface-open-sans'
import 'normalize.css'

const Width = {
  'iPhone SE': 320,
  'Galaxy S': 360,
  iPhone: 375,
  'iPhone Plus': 414,
  'Android 7"': 600,
  iPad: 768,
  // '720p': 1280,
  // '1080p': 1920,
  // '1440p': 2560,
  // '4k': 3840,
}

interface SpacedStackProps extends HTMLAttributes<HTMLDivElement> {
  width?: number
  children?: ReactNode
}

function SpacedStack({
  width = Width['iPhone SE'],
  ...props
}: SpacedStackProps) {
  return (
    <div
      {...props}
      sx={{
        display: 'grid',
        gridGap: 16,
        maxWidth: width,
        mx: 'auto',
        alignContent: 'stretch',
      }}
    />
  )
}

export default class Wrapper extends Component {
  render() {
    return (
      <ThemeProvider
        theme={{ theme: defaultTheme, useCustomProperties: false }}
      >
        <Styled.root>
          <SpacedStack>{this.props.children}</SpacedStack>
        </Styled.root>
      </ThemeProvider>
    )
  }
}
