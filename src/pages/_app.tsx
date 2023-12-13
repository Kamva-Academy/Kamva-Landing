import 'styles/global.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { Fragment, useEffect } from 'react';
import { GoogleAnalytics } from "nextjs-google-analytics";
import { initSupportingThirdPartyApps } from 'utils/SupportingThirdPartyApps';
import ThemeRTL from 'styles/MuiTheme';

function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    initSupportingThirdPartyApps();
  }, [])

  return (
    <Fragment>
      <GoogleAnalytics trackPageViews />
      <Head>
        <title>کاموا</title>
        <meta charSet="utf-8" />
        <meta name="description" content="پلتفرم برگزاری دوره‌های آنلاین" />
        <meta name="author" content="جمع علمی-ترویجی رستا" />
      </Head>
      <ThemeProvider theme={ThemeRTL('rtl')}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </Fragment>
  )
}

export default App;
