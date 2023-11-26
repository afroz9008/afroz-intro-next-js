import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/theme/createEmotionCache';
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/app.scss'
import '../styles/simple-line-icons.css';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }) {

  return <CacheProvider value={clientSideEmotionCache}>
    <Component {...pageProps} />
  </CacheProvider>
}

export default MyApp;
