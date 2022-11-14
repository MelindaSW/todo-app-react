export const incrementDays = (date: Date, days: number) => {
  const dateCopy = new Date(date)
  dateCopy.setDate(date.getDate() + days)
  return dateCopy
}

export const decrementDays = (date: Date, days: number) => {
  const dateCopy = new Date(date)
  dateCopy.setDate(date.getDate() - days)
  return dateCopy
}

export const isOverdue = (dateCreated: Date, deadline: Date) => {
  return deadline >= dateCreated
}
