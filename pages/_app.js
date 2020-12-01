import React from 'react'
import { Global, css } from '@emotion/react'
import { DataContextProvider } from '../context/dataContext'

function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Global
        styles={css`
          body {
            margin: 0;
            font-family: sans-serif;
          }
        `}
      />
      <Component {...pageProps} />
    </DataContextProvider>
  )
}

export default MyApp
