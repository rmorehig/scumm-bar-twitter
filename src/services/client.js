async function client(path, config) {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}${path}`, {
    ...config,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  return data
}

export default client
