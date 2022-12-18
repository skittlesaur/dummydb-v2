import SyntaxHighlighter from 'react-syntax-highlighter'

const Json = ({ data }: any) => {
  const formatted = data.map((fields: any) => {
    const obj: any = {}
    fields.forEach((field: any) => {
      obj[field.name] = field.value
    })
    return obj
  })

  return (
    <div className="relative flex flex-col gap-4">
      <SyntaxHighlighter
        language="json"
        useInlineStyles={false}
      >
        {JSON.stringify(formatted, null, 2)}
      </SyntaxHighlighter>
    </div>
  )
}

export default Json