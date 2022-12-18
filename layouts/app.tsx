import { ReactNode } from 'react'
import Navigation from '@components/nav'

interface AppProps {
  children: ReactNode
}

const AppLayout = ({ children }: AppProps) => {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50 w-full min-h-screen flex flex-col">
      <Navigation />
      <div className="w-full max-w-screen-xl mx-auto py-12 flex flex-col h-full grow">
        {children}
      </div>
    </div>
  )
}

export default AppLayout