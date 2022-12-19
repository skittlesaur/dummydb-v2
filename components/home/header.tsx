import { AnimatePresence, motion } from 'framer-motion'
import reactStringReplace from 'react-string-replace'
import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

const features = [
  {
    text: 'An easy to use test data generator for your next project.',
    values: [],
  },
  {
    text: 'Supports standard data types like $VALUES$',
    values: [
      'string',
      'integer',
      'float',
      'boolean',
      'array',
      'object',
      'null',
    ],
  },
  {
    text: 'Supports identifiers data types like $VALUES$',
    values: [
      'email',
      'username',
      'password',
      'hashed password',
      'token',
    ],
  },
]

const Header = () => {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [featuresArr, setFeaturesArr] = useState(Array.from({ length: features.length }))

  const selectFeature = () => {
    const idx = Math.floor(Math.random() * features.length)
    setFeaturesArr(prev => {
      const arr = [...prev]
      arr.splice(idx, 1)
      return arr
    })

    return idx
  }

  useEffect(() => {
    const interval = setInterval(() => {
      let idx

      do {
        idx = selectFeature()
      } while (idx === currentFeature)

      setCurrentFeature(idx)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentFeature])

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl md:text-5xl font-bold">
          Generate test
          {' '}
          <span className="italic font-mono inline-flex gap-2 before:font-mono before:content-['{'] before:text-primary after:font-mono after:content-['}'] after:text-primary">
            data
          </span>
          {' '}
          on the fly
        </h1>
        <div className="dark:text-gray-400 h-24 md:h-20">
          <AnimatePresence mode="wait">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              key={currentFeature}
            >
              {reactStringReplace(features[currentFeature].text, '$VALUES$', (match, i) => (
                <Fragment key={i}>
                  {features[currentFeature].values.map((value, j) => (
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: j * 0.1 } }}
                      exit={{ opacity: 0, y: -20, transition: { duration: 1 } }}
                      key={i * j}
                      className="inline-block"
                    >
                      <code className="text-white bg-gray-900/80 px-2 py-1 rounded text-sm font-mono">
                        {value}
                      </code>
                      {j !== features[currentFeature].values.length - 1 && ', '}
                      {j === features[currentFeature].values.length - 2 && ' and '}
                    </motion.span>
                  ))}
                </Fragment>
              ))}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      <Link
        className="uppercase bg-primary self-start px-4 py-2 rounded-md text-primary-900 font-bold mt-2 hover:shadow-lg hover:shadow-primary/20 hover:font-normal hover:text-gray-100 hover:bg-primary/70 hover:tracking-widest transition-all duration-200"
        href="/generate"
      >
        Start generating
      </Link>
    </div>
  )
}

export default Header