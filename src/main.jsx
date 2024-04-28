import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoute from './AppRoute.jsx'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <AppRoute />
    </ChakraProvider>
  </React.StrictMode>,
)
