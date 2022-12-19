import cuid from '@lib/types/identifiers/cuid'
import jwt from 'jsonwebtoken'
import hat from 'hat'

const defaultSecret = hat()

const token = (secret: string = defaultSecret) => {
  const id = cuid()
  const token = jwt.sign({ id }, secret)
  return token
}

export default token