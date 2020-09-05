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
    'Dec',
  ]

  const monthIndex = dateToFormat.getMonth()
  const day = dateToFormat.getDate()
  const year = dateToFormat.getFullYear()
  const currentYear = new Date().getFullYear()
  return `${monthNames[monthIndex]} ${day}${
    currentYear !== year ? `, ${year}` : ''
  }`
}

export function deepFreeze(object) {
  // Retrieve the property names defined on object
  var propNames = Object.getOwnPropertyNames(object)

  // Freeze properties before freezing self
  for (let name of propNames) {
    let value = object[name]

    if (value && typeof value === 'object') {
      deepFreeze(value)
    }
  }

  return Object.freeze(object)
}
