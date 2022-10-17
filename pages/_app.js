import '../styles/globals.css'
import { AuthProvider } from '../lib/auth'
// import { ThemeProvider } from '@emotion/react'
// import { CSSReset } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    // <ThemeProvider theme={theme}>
    <ChakraProvider>
      <AuthProvider>
        {/* <CSSReset/> */}
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp