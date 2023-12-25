import 'styles/global.css'
import 'styles/fonts.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from 'store/index';
import { Fragment, useEffect } from 'react';
import selectTheme from "configs/themes/index"
import { GoogleAnalytics } from "nextjs-google-analytics";
import { initSupportingThirdPartyApps } from 'configs/SupportingThirdPartyApps';


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

  useEffect(() => {
    initSupportingThirdPartyApps();
  }, [])

  return (
    <Fragment>
      <GoogleAnalytics trackPageViews />
      <Head>
        <title>کاموا</title>
      </Head>
      <ThemeProvider theme={selectTheme("rtl")}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </Fragment>
  )
}

export default App;
