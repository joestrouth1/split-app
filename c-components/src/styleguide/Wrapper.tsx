/**@jsx jsx */
import { jsx, Styled, ThemeProvider } from 'theme-ui'
import { Component } from 'react'
import { defaultTheme } from '../theme'
import 'typeface-open-sans'
import 'normalize.css'

function SpacedStack(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      sx={{
        display: 'grid',
        gridGap: 16,
        maxWidth: 360,
        mx: 'auto',
        alignContent: 'stretch',
      }}
    />
  )
}

export default class Wrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Styled.root>
          <SpacedStack>{this.props.children}</SpacedStack>
        </Styled.root>
      </ThemeProvider>
    )
  }
}
