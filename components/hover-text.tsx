import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const getRelativePosition = (element: any, event: MouseEvent) => {
  const position = {
    x: event.pageX,
    y: event.pageY,
  }

  const offset = {
    left: element.offsetLeft,
    top: element.offsetTop,
    width: element.clientWidth,
    height: element.clientHeight,
  }

  let reference = element.offsetParent

  while (reference) {
    offset.left += reference.offsetLeft
    offset.top += reference.offsetTop
    reference = reference.offsetParent
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  }
}

const HoverText = ({ children, text }: any) => {
  const [hover, setHover] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const boxRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: any) => {
    setMousePosition(
      getRelativePosition(boxRef.current as HTMLElement, e),
    )
  }

  return (
    <div
      ref={boxRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative flex"
    >
      {children}
      <AnimatePresence mode="wait">
        {hover && (
          <motion.div
            key={text}
            initial={{ opacity: 0, y: 5 }}
            animate={{
              opacity: 1,
              y: mousePosition.y,
            }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute whitespace-nowrap bg-gray-950 border border-gray-800 px-2 py-1 text-sm rounded shadow-lg z-40 left-0 top-0 left-full ml-1"
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HoverText