import { type FC, type ReactNode } from 'react'
import Navigation from './Navigation'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="flex flex-col w-full max-w-420">
        <Navigation />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
