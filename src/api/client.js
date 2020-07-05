const API_URL = 'http://localhost:4000'

async function client(path, config) {
  const response = await fetch(`${API_URL}${path}`, {
    ...config,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  return data
}

export default client
