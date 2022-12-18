import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'next-themes'


const App = ({ Component, pageProps }: any) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <Toaster position="bottom-center" />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App