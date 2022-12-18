import Schema from '@components/generate/schema'
import RightSection from '@components/generate/right-section'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Generated from '@components/generate/generated'

enum Views {
  SCHEMA,
  GENERATED,
}

const Generate = () => {
  const [activeView, setActiveView] = useState(Views.SCHEMA)
  const [fields, setFields] = useState<{ id: string, name: string, type: string }[]>([])

  const generate = (fields: { id: string, name: string, type: string }[]) => {
    setFields(fields)
    setActiveView(Views.GENERATED)
  }

  return (
    <div className="w-full h-full grid grid-cols-[1.25fr_1fr] gap-10 grow">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeView}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          {activeView === Views.SCHEMA && <Schema generate={generate} />}
          {activeView === Views.GENERATED && <Generated fields={fields} />}
        </motion.div>
      </AnimatePresence>
      <RightSection />
    </div>
  )
}

export default Generate