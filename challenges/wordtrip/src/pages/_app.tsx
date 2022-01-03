import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header";
import { theme } from "../styles/theme";

import "swiper/css/bundle";
import '../components/Slider/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
