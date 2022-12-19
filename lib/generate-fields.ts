import blank from '@lib/types/basic/blank'
import boolean from '@lib/types/basic/boolean'
import date from '@lib/types/basic/date'
import datetime from '@lib/types/basic/datetime'
import integer from '@lib/types/basic/integer'
import number from '@lib/types/basic/number'
import time from '@lib/types/basic/time'
import email from '@lib/types/identifiers/email'
import password from '@lib/types/identifiers/password'
import simpleId from '@lib/types/identifiers/simple-id'
import uuid from '@lib/types/identifiers/uuid'
import cuidGenerator from '@lib/types/identifiers/cuid'

const generator = async (type: string) => {
  const genType = type.toLowerCase()

  if (genType === 'blank')
    return blank()

  if (genType === 'boolean')
    return boolean()

  if (genType === 'date')
    return date()

  if (genType === 'datetime')
    return datetime()

  if (genType === 'integer')
    return integer()

  if (genType === 'number')
    return number()

  if (genType === 'time')
    return time()

  if (genType === 'simple id')
    return simpleId()

  if (genType === 'uuid')
    return uuid()

  if (genType === 'cuid')
    return cuidGenerator()

  if (genType === 'email')
    return email()

  if (genType === 'password')
    return password()

  throw new Error(`Unknown type: ${type}`)
}

const generateFields = async (fields: any[], count: number) => {
  const result = []

  for (let i = 0; i < count; i++) {
    const field = []
    for (const { name, type } of fields) {
      const value = await generator(type.toLowerCase())
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