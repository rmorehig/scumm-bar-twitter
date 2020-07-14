async function client(path, config) {
  const response = await fetch(`/api${path}`, {
    ...config,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  return data
}

export default client
