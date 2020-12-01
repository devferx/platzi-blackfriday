import React from 'react'
import { Global, css } from '@emotion/react'
import { DataContextProvider } from '../context/dataContext'
import { FormContextProvider } from '../context/formContext'

function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <FormContextProvider>
        <Global
          styles={css`
            body {
              margin: 0;
              background-color: #fffcf9;
              font-family: sans-serif;
            }
          `}
        />
        <Component {...pageProps} />
      </FormContextProvider>
    </DataContextProvider>
  )
}

export default MyApp
