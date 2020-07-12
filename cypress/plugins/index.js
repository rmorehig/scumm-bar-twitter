module.exports = (on, config) => {
  config.baseUrl = 'http://localhost:3000'
  config.integrationFolder = 'cypress/e2e'
  return config
}
