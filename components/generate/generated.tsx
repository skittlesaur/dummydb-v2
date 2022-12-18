import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import generateFields from '@lib/generate-fields'
import Table from '@components/generate/views/table'
import TableIcon from '@icons/table.svg'
import CodeIcon from '@icons/code.svg'
import Json from '@components/generate/views/json'

enum Views {
  TABLE,
  JSON
}

const Generated = ({ fields }: any) => {
  const [view, setView] = useState(Views.TABLE)
  const [count, setCount] = useState(10)
  const [data, setData] = useState<any>()

  useEffect(() => {
    if (!fields) return
    if (count < 0) {
      toast.error('Count cannot be less than 0')
      return
    }

    const res = generateFields(fields, count)
    setData(res)
  }, [fields, count])

  if (!data)
    return <></>

  return (
    <div className="flex flex-col justify-between gap-14 grow">
      <div className="flex flex-col gap-10 grow">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="italic font-mono font-medium text-3xl inline-flex gap-2 before:font-mono before:content-['{'] before:text-primary after:font-mono after:content-['}'] after:text-primary">
              Result
            </h1>
            <p className="text-gray-400 text-sm lg:max-w-[30vw]">
              Generated data ready to be used in your application.
            </p>
          </div>
          <div>
            <button
              onClick={() => setView(prev => prev === Views.TABLE ? Views.JSON : Views.TABLE)}
              className="bg-gray-900 p-2 rounded-md border border-gray-800 hover:border-gray-700 hover:bg-gray-800 transition-colors duration-200 ease-in-out"
            >
              {view === Views.TABLE ? (
                <CodeIcon className="w-6 h-6 fill-current text-gray-300" />
              ) : (
                <TableIcon className="w-6 h-6 fill-current text-gray-300" />
              )}
              <span className="sr-only">{view === Views.TABLE ? 'Change to JSON view' : 'Change to table view'}</span>
            </button>
          </div>
        </div>
        <div className="bg-gray-950 p-2 rounded-lg border border-gray-900">
          {view === Views.TABLE && <Table data={data} />}
          {view === Views.JSON && <Json data={data} />}
        </div>
      </div>
      <div className="flex flex-col gap-2">

      </div>
    </div>
  )
}

export default Generated