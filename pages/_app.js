import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/theme/createEmotionCache';
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/app.scss'
import '../styles/simple-line-icons.css';
import Layout from '../Components/Layout';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }) {

  return <CacheProvider value={clientSideEmotionCache}>
    <Layout header={pageProps.header}>
      <>
        <Component {...pageProps} />
      </>
    </Layout>
    <IconButton style={{ position: "fixed", right: 0, bottom: 0, outline: 'none' }}>
      <Link href="https://afroz-sorathiya.sanity.studio" passHref>
        <a target="_blank" rel="noopener noreferrer" style={{ height: 50, width: 50 }}>
          <Image src={"/settings.png"} height={50} width={50} alt='Admin Setting' />
        </a>
      </Link>
    </IconButton>
  </CacheProvider>
}

export default MyApp;
