import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppRoute from './AppRoute.jsx'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <AppRoute />
    </ChakraProvider>
  </React.StrictMode>,
)
