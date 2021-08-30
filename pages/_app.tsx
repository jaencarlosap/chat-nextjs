import React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let user = localStorage.getItem('userName');

    if (user && router.pathname != '/chat') {
      router.replace('/chat');
    } else if (!user && router.pathname != '/') {
      router.replace('/');
    }

    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {loading && router.isReady && <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
};

export default MyApp;
