import { type FC, type ReactNode } from 'react'
import Navigation from './Navigation'
import Cursor from '../components/Cursor'
import { LenisProvider } from '../lib/lenis'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <LenisProvider>
      <div className="min-h-screen w-full flex flex-col items-center justify-center pb-20">
        <Cursor />
        <div className="flex flex-col w-full max-w-400 px-4 lg:px-6">
          <Navigation />
          <main className="flex flex-col gap-12 md:gap-46">{children}</main>
        </div>
      </div>
    </LenisProvider>
  )
}

export default Layout
