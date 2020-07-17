async function client(path, { body, token } = {}) {
  const response = await fetch(`/api${path}`, {
    method: body ? 'POST' : 'GET',
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': body ? 'application/json' : undefined,
      Authorization: token ? `Bearer ${token}` : undefined
    }
  })
  if (response.status === 401) {
    return Promise.reject({ message: 'You need authentication.' })
  }
  const data = await response.json()
  if (response.ok) {
    return data
  }
  return Promise.reject({ message: 'Something went wrong.' })
}

export default client
