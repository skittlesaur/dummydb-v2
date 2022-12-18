const formatValue = (value: any): string => {
  if (value === undefined || value === null) {
    return ''
  }
  if (typeof value === 'string') {
    return value
  }
  if (typeof value === 'number') {
    return value.toString()
  }
  if (typeof value === 'boolean') {
    return value ? 'true' : 'false'
  }
  if (Array.isArray(value)) {
    return value.map(formatValue).join(', ')
  }
  return JSON.stringify(value)
}

const Table = ({ data }: any) => {
  return (
    <div className="relative flex flex-col gap-4 h-[23em] overflow-y-auto">
      <div
        className="grid sticky top-0 bg-gray-950 px-2 py-1 gap-4"
        style={{ gridTemplateColumns: `repeat(${data[0]?.length}, 1fr)` }}
      >
        {data[0]?.map((fields: any, i: number) => (
          <p key={i} className="text-gray-300 text-sm font-medium w-24 truncate">
            {fields.name}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {data?.map((fields: any, idx: number) => (
          <div
            key={idx}
            className="grid hover:bg-gray-900 transition-colors duration-200 ease-in-out px-2 py-1 rounded gap-4"
            style={{ gridTemplateColumns: `repeat(${data[0]?.length}, 1fr)` }}
            title={`Row ${idx + 1}`}
          >
            {fields.map((field: any, idx: number) => (
              <p key={idx} className="text-gray-500 text-sm w-24 truncate">
                {formatValue(field.value)}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Table