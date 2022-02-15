import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { theme } from 'components/styles/theme'
import { GlobalStyle } from 'components/styles/Global'
import { Wrapper } from 'components/styles'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  )
}

export default MyApp
