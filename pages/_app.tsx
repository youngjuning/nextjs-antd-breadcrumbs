import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Breadcrumbs from 'src'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{margin: '0 16px'}}>
      <Breadcrumbs />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
