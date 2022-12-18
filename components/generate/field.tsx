import DeleteIcon from '@icons/trash.svg'

const Field = ({ field, removeField, updateField, setModalOpen }: any) => {
  return (
    <div className="flex items-center w-full gap-4 md:px-2">
      <input
        id="property-name"
        type="text"
        value={field.name}
        autoComplete="off"
        aria-autocomplete="none"
        onChange={e => updateField({ ...field, name: e.target.value })}
        placeholder="Property name"
        className="w-full bg-inherit placeholder-gray-400 border border-gray-300 dark:border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <button
        onClick={setModalOpen}
        id="type"
        className={`w-full text-start ${field.type ? 'text-gray-50' : 'text-gray-400'} bg-inherit border border-gray-300 dark:border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
      >
        {field.type || 'Property type'}
      </button>
      <button
        onClick={removeField}
        className="w-14 text-gray-700 aspect-square hover:bg-gray-900 hover:text-gray-400 p-2 rounded-full transition-all duration-150 ease-in-out"
      >
        <DeleteIcon className="fill-current" />
      </button>
    </div>
  )
}

export default Field