import { parseUrl, getUsernameFromUrl } from '../navigation'

describe('parseUrl', () => {
  it('returns /:username if the route is not /', () => {
    const url = parseUrl('/rmorehig')
    expect(url).toEqual('/:username')
  })

  it('returns / if the route is /', () => {
    const url = parseUrl('/')
    expect(url).toEqual('/')
  })

  it('returns / if the route isnt passed', () => {
    const url = parseUrl()
    expect(url).toEqual('/')
  })
})

describe('getUsernameFromUrl', () => {
  it('returns username if the route is /username', () => {
    const url = getUsernameFromUrl('/rmorehig')
    expect(url).toEqual('rmorehig')
  })
})
