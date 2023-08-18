import Provider from '@/context/provider'
import '@/styles/globals.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}
