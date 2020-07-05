export const debounce = (fn, time = 500) => {
  let timeoutId
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      fn.apply(null, args)
    }, time)
  }
}

export const formatDate = date => {
  const dateToFormat = new Date(date)
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  const monthIndex = dateToFormat.getMonth()
  const day = dateToFormat.getDate()
  const year = dateToFormat.getFullYear()
  const currentYear = new Date().getFullYear()
  return `${monthNames[monthIndex]} ${day}${
    currentYear !== year ? `, ${year}` : ''
  }`
}
