const date = (startYear: number = 1970) => {
  const start = new Date(startYear, 0, 1)
  const end = new Date()
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  ).toDateString()
}

export default date