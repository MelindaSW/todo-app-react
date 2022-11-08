export const incrementDays = (date: Date, days: number) => {
  const dateCopy = new Date(date)
  dateCopy.setDate(date.getDate() + days)
  return dateCopy
}
