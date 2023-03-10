import Schema from '@components/generate/schema'
import RightSection from '@components/generate/right-section'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Generated from '@components/generate/generated'
import toast from 'react-hot-toast'
import generateId from '@lib/generate-id'

enum Views {
  SCHEMA,
  GENERATED,
}

const Generate = () => {
  const [activeView, setActiveView] = useState(Views.SCHEMA)
  const [fields, setFields] = useState<{ id: string, name: string, type: string }[]>([{
    id: generateId(),
    name: '',
    type: '',
  }])

  const generate = () => {
    for (const field of fields) {
      if (!field.name) {
        toast.error('Field name cannot be empty')
        return
      }

      if (!field.type) {
        toast.error('Field type cannot be empty')
        return
      }
    }
    setActiveView(Views.GENERATED)
  }

  return (
    <div className="w-full h-full grid md:grid-cols-[1.25fr_0.75fr] gap-10 grow">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeView}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          {activeView === Views.SCHEMA && (
            <Schema
              fields={fields}
              setFields={setFields}
              generate={generate}
            />
          )}
          {activeView === Views.GENERATED && (
            <Generated
              editSchema={() => setActiveView(Views.SCHEMA)}
              fields={fields}
            />
          )}
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 overflow-hidden">
        <RightSection />
      </div>
    </div>
  )
}

export default Generate