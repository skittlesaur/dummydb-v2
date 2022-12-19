import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import generateFields from '@lib/generate-fields'
import Table from '@components/generate/views/table'
import TableIcon from '@icons/table.svg'
import CodeIcon from '@icons/code.svg'
import Json from '@components/generate/views/json'
import RefreshIcon from '@icons/refresh.svg'
import DownloadIcon from '@icons/download.svg'
import EditIcon from '@icons/edit.svg'

enum Views {
  TABLE,
  JSON
}

const maxRows = 1000

const Generated = ({ fields, editSchema }: any) => {
  const [view, setView] = useState(Views.TABLE)
  const [count, setCount] = useState(10)
  const [data, setData] = useState<any>()

  const generate = async () => {
    if (!fields) return
    if (count < 0) {
      toast.error('Count cannot be less than 0')
      return
    }

    const res = await generateFields(fields, count)
    setData(res)
  }

  useEffect(() => {
    generate()
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
        </div>
        <div className="flex items-stretch self-end gap-2">
          <button
            onClick={() => {
              editSchema()
            }}
            className="bg-gray-900 p-2 rounded-md border border-gray-800 hover:border-gray-700 hover:bg-gray-800 transition-colors duration-200 ease-in-out"
          >
            <EditIcon className="w-6 h-6 fill-current text-gray-300" />
            <span className="sr-only">Edit Schema</span>
          </button>
          <input
            value={count}
            onChange={(e) => {
              const count = parseInt(e.target.value)
              if (count && isNaN(count)) {
                setCount(10)
                toast.error('Count must be a number')
                return
              }

              if (count > maxRows) {
                setCount(maxRows)
                toast.error(`Count cannot be greater than ${maxRows}`)
                return
              }

              setCount(count || 0)
            }}
            className="w-14 text-center font-mono text-lg bg-gray-900 rounded-md border border-gray-800 hover:border-gray-700 hover:bg-gray-800 transition-colors duration-200 ease-in-out"
          />
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
          <button
            onClick={() => {
              generate()
              toast.success('Data regenerated')
            }}
            className="bg-gray-900 p-2 rounded-md border border-gray-800 hover:border-gray-700 hover:bg-gray-800 transition-colors duration-200 ease-in-out"
          >
            <RefreshIcon className="w-6 h-6 fill-current text-gray-300" />
            <span className="sr-only">Regenerate</span>
          </button>
          {/*<button*/}
          {/*  onClick={() => {*/}
          {/*    generate()*/}
          {/*    toast.success('Data regenerated')*/}
          {/*  }}*/}
          {/*  className="bg-gray-900 p-2 rounded-md border border-gray-800 hover:border-gray-700 hover:bg-gray-800 transition-colors duration-200 ease-in-out"*/}
          {/*>*/}
          {/*  <DownloadIcon className="w-6 h-6 fill-current text-gray-300" />*/}
          {/*  <span className="sr-only">Download</span>*/}
          {/*</button>*/}
        </div>
        <div className="bg-gray-950 p-2 rounded-lg border border-gray-900">
          {view === Views.TABLE && <Table data={data} />}
          {view === Views.JSON && <Json data={data} />}
        </div>
      </div>
    </div>
  )
}

export default Generated