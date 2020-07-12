class ApiService {
  constructor() {
    this.url = process.env.REACT_APP_BACKEND_URL
    this.headers = {
      'Content-Type': 'application/json'
    }
  }
  static init() {
    return new ApiService()
  }
  async get({ path }) {
    try {
      const response = await fetch(`${this.url}${path}`, {
        headers: this.headers
      })
      const data = await response.json()
      return data
    } catch (err) {
      console.error(err)
    }
  }
  async post({ path, body }) {
    try {
      const response = await fetch(`${this.url}${path}`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(body)
      })
      const data = await response.json()
      return data
    } catch (err) {
      console.error(err)
    }
  }
  async patch({ path, body }) {
    try {
      const response = await fetch(`${this.url}${path}`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(body)
      })
      const data = await response.json()
      return data
    } catch (err) {
      console.error(err)
    }
  }
}

export default ApiService
