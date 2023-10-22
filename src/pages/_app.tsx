import 'styles/global.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../store/index';
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
