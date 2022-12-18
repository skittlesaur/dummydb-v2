import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Blob = ({ width, height, color }: any) => {
  const getRandom = (min: number, max: number) => Math.random() * (max - min) + min

  const getPosition = () => {
    const PADDING = 10

    const x = getRandom(PADDING, (width ?? 600) - PADDING)
    const y = getRandom(PADDING, (height ?? 500) - PADDING)

    return { x, y }
  }

  const updateBlob = () => {
    setBlobData((prev: any) => {
      const data = { initial: prev.animate, animate: {} }

      const pos = getPosition()
      const opacity = getRandom(.3, 1)
      const scale = getRandom(5, 20)
      data.animate = {
        ...pos,
        width: `${scale}em`,
        opacity,
      }

      return data
    })
  }

  const initialize = () => {
    const data = { animate: {}, initial: {} }

    const initPos = getPosition()
    const initOpacity = getRandom(.3, 1)
    const initScale = getRandom(5, 20)
    data.initial = {
      ...initPos,
      width: `${initScale}em`,
      initOpacity,
    }

    const pos = getPosition()
    const opacity = getRandom(.5, 1)
    const scale = getRandom(5, 20)
    data.animate = {
      ...pos,
      width: `${scale}em`,
      opacity,
    }

    return data
  }

  const [blobData, setBlobData] = useState<any>({})

  useEffect(() => {
    setBlobData(initialize())
  }, [])

  return (
    <motion.div
      initial={blobData.initial}
      animate={blobData.animate}
      transition={{ duration: 20 }}
      onAnimationComplete={() => updateBlob()}
      className={`absolute aspect-square ${color ? color : 'bg-primary'} z-[0]`}
    />
  )
}

export default Blob