/**@jsx jsx */
import { jsx, Styled, ThemeProvider } from 'theme-ui'
import {
  Component,
  useState,
  createContext,
  HTMLAttributes,
  ReactNode,
} from 'react'
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

export const WidthContext = createContext({})

function WidthSelector({
  children,
}: {
  children: (width: number) => ReactNode
}) {
  const [width, setWidth] = useState<number>(Width['iPhone SE'])

  return (
    <WidthContext.Provider
      value={{ widths: Width, currentWidth: width, setWidth }}
    >
      <div>
        <div
          sx={{
            width: '100%',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            m: -1,
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            borderBottomColor: 'grays.6',
            pb: 2,
            mb: 3,
          }}
        >
          {Object.entries(Width).map(([device, deviceWidth]) => {
            return (
              <button
                key={device}
                sx={{
                  variant: 'buttons.base',
                  backgroundColor: 'transparent',
                  textTransform: 'uppercase',
                  fontFamily: 'body',
                  fontWeight: 'body',
                  fontSize: 1,
                  color: deviceWidth === width ? 'primary' : 'grays.8',
                  px: 2,
                  py: 1,
                  m: 1,
                }}
                onClick={() => setWidth(deviceWidth)}
              >
                {device}
              </button>
            )
          })}
        </div>
        {children(width)}
      </div>
    </WidthContext.Provider>
  )
}

export default class Wrapper extends Component {
  render() {
    return (
      <ThemeProvider
        theme={{ theme: defaultTheme, useCustomProperties: false }}
      >
        <Styled.root>
          <WidthSelector>
            {width => (
              <SpacedStack width={width}>{this.props.children}</SpacedStack>
            )}
          </WidthSelector>
        </Styled.root>
      </ThemeProvider>
    )
  }
}
