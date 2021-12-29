import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from 'react-query' 
import UserContext from '../context/UserContext'; 

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {

  return(
    <QueryClientProvider client={queryClient}> 
    <UserContext>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      </UserContext>
    </QueryClientProvider>
  )
}

export default MyApp
