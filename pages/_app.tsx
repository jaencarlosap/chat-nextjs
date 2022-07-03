import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
	Wrapper,
	theme,
	GlobalStyle
} from 'components/styles'

const MyApp = ({ Component, pageProps }) => {
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
