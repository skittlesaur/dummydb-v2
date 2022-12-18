import { AnimatePresence } from 'framer-motion'
import Modal from '@components/generate/modal'
import Field from '@components/generate/field'
import AddIcon from '@icons/add.svg'
import { useState } from 'react'
import generateId from '@lib/generate-id'
import toast from 'react-hot-toast'

const Schema = ({ generate }: any) => {
  const [fields, setFields] = useState<{ id: string, name: string, type: string }[]>([{
    id: generateId(),
    name: '',
    type: '',
  }])
  const [modalOpen, setModalOpen] = useState(-1)

  const addField = () => {
    setFields(prev => [...prev, { id: generateId(), name: '', type: '' }])
  }

  const removeField = (index: number) => {
    setFields(prev => prev.filter((_, i) => i !== index))
  }

  const updateField = (index: number, field: { id: string, name: string, type: string }) => {
    setFields(prev => prev.map((f, i) => i === index ? field : f))
  }

  return (
    <div className="flex flex-col justify-between gap-14 grow min-h-full">
      <AnimatePresence mode="wait">
        {modalOpen !== -1 && (
          <Modal
            key={modalOpen}
            hideModal={() => setModalOpen(-1)}
            updateType={(type: string) => {
              updateField(modalOpen, { ...fields[modalOpen], type })
              setModalOpen(-1)
            }}
          />
        )}
      </AnimatePresence>
      <div className="flex flex-col gap-10 grow">
        <div className="flex flex-col gap-4">
          <h1 className="italic font-mono font-medium text-3xl inline-flex gap-2 before:font-mono before:content-['{'] before:text-primary after:font-mono after:content-['}'] after:text-primary">
            Generate
          </h1>
          <p className="text-gray-400 text-sm lg:max-w-[30vw]">
            Pick a name for your attribute along with its data type. Once you{'\''}re done, click the generate button to
            generate your test data.
          </p>
        </div>
        <div className="flex flex-col gap-4 py-5">
          {fields.map((field, i) => (
            <Field
              key={field.id}
              field={field}
              removeField={() => removeField(i)}
              updateField={(field: { id: string, name: string, type: string }) => updateField(i, field)}
              setModalOpen={() => setModalOpen(i)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={addField}
          className="flex items-center justify-center gap-1 text-gray-400 py-2 hover:text-white"
        >
          <AddIcon className="w-5 aspect-square fill-current" />
          <span>Add Field</span>
        </button>
        <button
          onClick={() => generate(fields)}
          className="w-full bg-gray-50 text-gray-900 py-2 px-4 rounded-md font-semibold uppercase tracking-widest hover:tracking-[.5rem] hover:bg-primary hover:shadow-lg hover:shadow-primary/20 border border-transparent hover:border-primary-900 transition-all duration-200 ease-in-out"
        >
          Generate
        </button>
      </div>
    </div>
  )
}

export default Schema