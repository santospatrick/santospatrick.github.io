import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/config/theme";

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
