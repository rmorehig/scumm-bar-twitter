import { formatDate, debounce } from '../helpers'

describe('formatDate', () => {
  test('formats the date to look like Twitter Wall', () => {
    const formattedDate = formatDate('1988-10-11')
    expect(formattedDate).toEqual('Oct 11, 1988')
  })

  test('doesnt show the year if its the current year', () => {
    const formattedDate = formatDate('2020-10-11')
    expect(formattedDate).toEqual('Oct 11')
  })
})

test('debounce function is only called when it should', () => {
  jest.useFakeTimers()
  const func = jest.fn()
  const debouncedFunc = debounce(func, 1000)
  debouncedFunc()
  debouncedFunc()
  debouncedFunc()
  expect(func).not.toBeCalled()
  jest.runAllTimers()
  expect(func).toBeCalled()
  expect(func).toHaveBeenCalledTimes(1)
  jest.clearAllTimers()
})
