import { AppProps } from 'next/app';
import '../styles/globals.scss';
import NextNprogress from 'nextjs-progressbar';

import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <NextNprogress
        color="#FFF"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
