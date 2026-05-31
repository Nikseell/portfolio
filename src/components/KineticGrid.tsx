import { useEffect, useRef, useState } from 'react'

interface KineticGridProps {
  gridSize?: number
  repulsionStrength?: number
  radius?: number
  dotSize?: number
  gridThickness?: number
  baseOpacity?: number
  gridColor?: string
  dotColor?: string
  hoverColor?: string
  backgroundColor?: string
}

function KineticGrid({
  gridSize = 60,
  repulsionStrength = -0.65,
  radius = 350,
  dotSize = 1.5,
  gridThickness = 0.5,
  baseOpacity = 0.09,
  hoverColor = '#FAFAFA',
  backgroundColor = '#0A0A0A',
  gridColor = '#787878',
  dotColor = '#FFFFFF',
}: KineticGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const dotsRef = useRef(
    new Map<string, { x: number; y: number; vx: number; vy: number; size: number; targetSize: number }>()
  )
  const mousePosRef = useRef<{ x: number; y: number } | null>(null)
  const colorsRef = useRef({
    gridSize,
    repulsionStrength,
    radius,
    dotSize,
    gridThickness,
    baseOpacity,
    gridColor,
    dotColor,
    hoverColor,
    backgroundColor,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    colorsRef.current = {
      gridSize,
      repulsionStrength,
      radius,
      dotSize,
      gridThickness,
      baseOpacity,
      gridColor,
      dotColor,
      hoverColor,
      backgroundColor,
    }
  }, [
    gridSize,
    repulsionStrength,
    radius,
    dotSize,
    gridThickness,
    baseOpacity,
    gridColor,
    dotColor,
    hoverColor,
    backgroundColor,
  ])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const maxDist = 400

    const parseColor = (color: string) => {
      if (!color || color === 'transparent') return { r: 0, g: 0, b: 0, a: 0 }
      let hex = color.replace('#', '')
      if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
      const r = parseInt(hex.substring(0, 2), 16)
      const g = parseInt(hex.substring(2, 4), 16)
      const b = parseInt(hex.substring(4, 6), 16)
      return { r: isNaN(r) ? 160 : r, g: isNaN(g) ? 160 : g, b: isNaN(b) ? 160 : b, a: 1 }
    }

    const getCanvasSize = () => ({
      width: canvas.clientWidth || canvas.offsetWidth || 1,
      height: canvas.clientHeight || canvas.offsetHeight || 1,
    })

    const initDots = () => {
      dotsRef.current.clear()
      const { width, height } = getCanvasSize()
      const gs = colorsRef.current.gridSize
      for (let gx = -gs; gx < width + gs * 2; gx += gs) {
        for (let gy = -gs; gy < height + gs * 2; gy += gs) {
          dotsRef.current.set(`${gx},${gy}`, { x: gx, y: gy, vx: 0, vy: 0, size: 1, targetSize: 1 })
        }
      }
    }

    let { width, height } = getCanvasSize()
    canvas.width = width
    canvas.height = height
    initDots()

    const getHoverIntensity = (x: number, y: number) => {
      const mouse = mousePosRef.current
      if (!mouse) return 0
      const dx = x - mouse.x,
        dy = y - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist > colorsRef.current.radius) return 0
      return Math.pow(1 - dist / colorsRef.current.radius, 3.5)
    }

    const mapRepulsion = (value: number) => (value <= 0 ? value * 25 : value * 90)

    const getCursorPush = (baseX: number, baseY: number) => {
      const mouse = mousePosRef.current
      const mapped = mapRepulsion(colorsRef.current.repulsionStrength)
      if (!mouse || mapped === 0) return { x: 0, y: 0 }
      const dx = baseX - mouse.x,
        dy = baseY - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist === 0) return { x: 0, y: 0 }
      const pushAmount = Math.pow(1 - Math.min(dist / maxDist, 1), 2) * mapped
      return { x: (dx / dist) * pushAmount, y: (dy / dist) * pushAmount }
    }

    const animate = () => {
      const c = colorsRef.current
      const hoverC = parseColor(c.hoverColor)
      const gridC = parseColor(c.gridColor)
      const dotC = parseColor(c.dotColor)
      const bgC = parseColor(c.backgroundColor)

      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = `rgba(${bgC.r}, ${bgC.g}, ${bgC.b}, ${bgC.a})`
      ctx.fillRect(0, 0, width, height)

      // Draw lines
      dotsRef.current.forEach((dot, key) => {
        const [gxStr, gyStr] = key.split(',')
        const gx = parseInt(gxStr),
          gy = parseInt(gyStr)
        const rightDot = dotsRef.current.get(`${gx + c.gridSize},${gy}`)
        const bottomDot = dotsRef.current.get(`${gx},${gy + c.gridSize}`)
        const hi = getHoverIntensity(dot.x, dot.y)

        if (rightDot) {
          const avg = (hi + getHoverIntensity(rightDot.x, rightDot.y)) / 2
          const r = Math.round(gridC.r + (hoverC.r - gridC.r) * avg)
          const g = Math.round(gridC.g + (hoverC.g - gridC.g) * avg)
          const b = Math.round(gridC.b + (hoverC.b - gridC.b) * avg)
          ctx.beginPath()
          ctx.moveTo(dot.x, dot.y)
          ctx.lineTo(rightDot.x, rightDot.y)
          ctx.lineWidth = c.gridThickness + avg * 2
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${c.baseOpacity + (1 - c.baseOpacity) * avg})`
          ctx.stroke()
        }

        if (bottomDot) {
          const avg = (hi + getHoverIntensity(bottomDot.x, bottomDot.y)) / 2
          const r = Math.round(gridC.r + (hoverC.r - gridC.r) * avg)
          const g = Math.round(gridC.g + (hoverC.g - gridC.g) * avg)
          const b = Math.round(gridC.b + (hoverC.b - gridC.b) * avg)
          ctx.beginPath()
          ctx.moveTo(dot.x, dot.y)
          ctx.lineTo(bottomDot.x, bottomDot.y)
          ctx.lineWidth = c.gridThickness + avg * 2
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${c.baseOpacity + (1 - c.baseOpacity) * avg})`
          ctx.stroke()
        }
      })

      // Update and draw dots
      dotsRef.current.forEach((dot, key) => {
        const [gxStr, gyStr] = key.split(',')
        const gx = parseInt(gxStr),
          gy = parseInt(gyStr)
        const push = getCursorPush(gx, gy)
        const tx = gx + push.x,
          ty = gy + push.y
        const forceX = (tx - dot.x) * 0.08
        const forceY = (ty - dot.y) * 0.08
        dot.vx = (dot.vx + forceX) * 0.75
        dot.vy = (dot.vy + forceY) * 0.75
        dot.x += dot.vx
        dot.y += dot.vy

        const hi = getHoverIntensity(dot.x, dot.y)
        dot.targetSize = c.dotSize + hi * c.dotSize
        dot.size += (dot.targetSize - dot.size) * 0.15

        const r = Math.round(dotC.r + (hoverC.r - dotC.r) * hi)
        const g = Math.round(dotC.g + (hoverC.g - dotC.g) * hi)
        const b = Math.round(dotC.b + (hoverC.b - dotC.b) * hi)
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, Math.max(c.dotSize * 0.5, dot.size), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${c.baseOpacity + (1 - c.baseOpacity) * hi})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = (e.clientX - rect.left) * (canvas.clientWidth / rect.width)
      const y = (e.clientY - rect.top) * (canvas.clientHeight / rect.height)
      if (x >= 0 && y >= 0 && x <= canvas.clientWidth && y <= canvas.clientHeight) {
        mousePosRef.current = { x, y }
      } else {
        mousePosRef.current = null
      }
    }

    const handleResize = () => {
      const newSize = getCanvasSize()
      width = newSize.width
      height = newSize.height
      canvas.width = width
      canvas.height = height
      initDots()
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(canvas)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      resizeObserver.disconnect()
      cancelAnimationFrame(animationRef.current)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  )
}

export default KineticGrid
