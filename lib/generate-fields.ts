import blank from '@lib/types/basic/blank'
import boolean from '@lib/types/basic/boolean'
import date from '@lib/types/basic/date'
import datetime from '@lib/types/basic/datetime'
import integer from '@lib/types/basic/integer'
import number from '@lib/types/basic/number'
import time from '@lib/types/basic/time'

const generator = (type: string) => {
  switch (type.toLowerCase()) {
    case 'blank':
      return blank()
    case 'boolean':
      return boolean()
    case 'date':
      return date()
    case 'datetime':
      return datetime()
    case 'integer':
      return integer()
    case 'number':
      return number()
    case 'time':
      return time()
  }
}

const generateFields = (fields: any[], count: number) => {
  const result = []

  for (let i = 0; i < count; i++) {
    const field = []
    for (const { name, type } of fields) {
      const value = generator(type.toLowerCase())
      field.push({
        name,
        value,
        type,
      })
    }

    result.push(field)
  }

  return result
}

export default generateFields