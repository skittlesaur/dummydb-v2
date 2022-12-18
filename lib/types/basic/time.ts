import datetime from '@lib/types/basic/datetime'

const time = (startYear: number = 1970) => {
  const date = new Date(datetime(startYear))
  return date.toLocaleTimeString()
}

export default time