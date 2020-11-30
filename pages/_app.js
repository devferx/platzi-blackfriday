import React from 'react'
import { Global, css } from '@emotion/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
