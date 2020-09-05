async function client(path: string, body?: object) {
  const response = await fetch(`/api${path}`, {
    method: body ? 'POST' : 'GET',
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (response.status === 401) {
    return Promise.reject({ message: 'You need authentication.' })
  }
  if (response.status === 404) {
    return Promise.reject({ message: 'Url not found' })
  }
  const data = await response.json()
  if (response.ok) {
    return data
  } else {
    return Promise.reject({ message: 'Something went wrong.' })
  }
}

export default client
