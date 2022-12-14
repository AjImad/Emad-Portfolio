import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} defaultTheme='dark' attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
