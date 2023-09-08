import 'styles/global.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'IRANYekan', 'Lalezar', 'Nanum Gothic'",
      fontWeight: 400,
    },
    button: {
      fontFamily: "'IRANYekan', 'Lalezar', 'Nanum Gothic'",
      fontWeight: 400,
    }
  }
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>)
}

export default App;
