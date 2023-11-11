import 'styles/global.css'
import 'styles/fonts.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from 'store/index';
import { useEffect } from 'react';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'IRANYekan', 'Lalezar'",
      fontWeight: 400,
    },
    button: {
      fontFamily: "'IRANYekan', 'Lalezar'",
      fontWeight: 400,
    }
  },
  palette: {
    primary: {
      light: '#3498DB',
      main: '#3C8CE7',
      dark: '#00376F',
      contrastText: '#000',
    },
    secondary: {
      light: '#FFE08B',
      main: '#FFD358',
      dark: '#ffbb00',
      contrastText: '#fff',
    },
  },
});

function App({ Component, pageProps }: AppProps) {

  function goftino() {
    var i = 'PhLmCZ',
      a = window,
      d = document;
    function g() {
      var g = d.createElement('script'),
        s = 'https://www.goftino.com/widget/' + i,
        l = localStorage.getItem('goftino_' + i);
      (g.async = !0),
        (
          g.src = l ?
            s + '?o=' + l :
            s);
      d
        .getElementsByTagName('head')[0]
        .appendChild(g);
    }
    'complete' === d.readyState ? g() : a.addEventListener('load', g, !1);
  };

  useEffect(() => {
    goftino();
  },)

  return (
    <>
      <Head>
        <title>کاموا</title>
      </Head>
      <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default App;
