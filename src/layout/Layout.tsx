import { type FC, type ReactNode, useEffect } from 'react'
import Navigation from './Navigation'
import Lenis from 'lenis'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.04,
    })

    return () => lenis.destroy()
  }, [])

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col w-full max-w-390">
        <Navigation />
        <main className="flex flex-col gap-20">{children}</main>
      </div>
    </div>
  )
}

export default Layout
