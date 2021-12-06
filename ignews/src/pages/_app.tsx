import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider as NextAuthProvider } from 'next-auth/client'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <NextAuthProvider session={pageProps.session} >
          <Header />
          <Component {...pageProps} />
          <ToastContainer />
        </NextAuthProvider>
  )
}

export default MyApp
