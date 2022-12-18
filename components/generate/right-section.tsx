import Blob from '@components/generate/blob'
import { useRef } from 'react'

const blobs = [
  'bg-[#FFB23D80]',
  'bg-[#9C3EFC80]',
  'bg-white/40',
  'bg-primary',
  'bg-[#FFB23D80]',
  'bg-primary',
  'bg-[#FFB23D80]',
  'bg-[#9C3EFC80]',
  'bg-[#9C3EFC80]',
  'bg-[#FFB23D80]',
  'bg-primary/50',
  'bg-primary/50',
  'bg-primary/50',
  'bg-primary',

]
const RightSection = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-0 md:top-0 right-0 w-[140%] h-60 -rotate-12 md:rotate-0 md:h-full md:w-[40%] bottom-0 overflow-hidden">
      <div ref={ref} className="relative w-full h-full">
        <div className="absolute top-0 h-[1px] w-full md:left-0 md:w-[1px] md:h-full z-[2] bg-gradient-to-b from-gray-700 to-gray-800" />
        <div className="absolute inset-0 z-[1] backdrop-blur-[100px]" />
        {blobs.map((blob, idx) => (
          <Blob
            key={idx}
            color={blob}
            width={ref.current?.offsetWidth}
            height={ref.current?.offsetHeight}
          />
        ))}
      </div>
    </div>
  )
}

export default RightSection