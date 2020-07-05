export const parseUrl = pathname => {
  let url = pathname?.slice(1).toLowerCase() || '/'
  let r = url.split('/')
  return r[0] ? '/:username' : '/'
}

export const getUsernameFromUrl = pathname =>
  pathname?.split('/')[1].toLowerCase()
