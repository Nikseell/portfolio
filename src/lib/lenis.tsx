import Lenis from 'lenis'
import { createContext, useContext, useEffect, useState, type FC, type ReactNode } from 'react'

const LenisContext = createContext<Lenis | null>(null)

export const useLenis = () => useContext(LenisContext)

export const LenisProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const instance = new Lenis({
      autoRaf: true,
      lerp: 0.08,
    })

    setLenis(instance)

    return () => {
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}
