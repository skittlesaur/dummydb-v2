const Json = ({ data }: any) => {
  const formatted = data.map((fields: any) => {
    const obj: any = {}
    fields.forEach((field: any) => {
      obj[field.name] = field.value
    })
    return obj
  })

  return (
    <div className="relative flex flex-col gap-4 h-[23em] overflow-y-auto">
      <pre className="text-gray-300 text-sm font-mono">
        {JSON.stringify(formatted, null, 2)}
      </pre>
    </div>
  )
}

export default Json