import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../styles/theme';
import createEmotionCache from '../styles/theme/createEmotionCache';
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/app.scss'
import '../styles/simple-line-icons.css';
import Layout from '../components/Layout';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }) {
  

  return <CacheProvider value={clientSideEmotionCache}>
    {/* <ThemeProvider theme={theme}> */}
    {/* <StyledEngineProvider injectFirst> */}
    <Layout>
      <>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* <CssBaseline /> */}
        <Component {...pageProps} />
      </>
    </Layout>
    {/* </StyledEngineProvider> */}
    {/* </ThemeProvider> */}
  </CacheProvider>
}

export default MyApp
