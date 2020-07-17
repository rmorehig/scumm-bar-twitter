describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should allow to follow new users, see their details and unfollow if they just were followed', () => {
    cy.findByRole('complementary', { name: /users to follow/i }).within(() => {
      cy.findByRole('textbox').type('stan')
      cy.wait(1000)
      cy.findByRole('list').within(() => {
        cy.findByRole('link', { name: /Stan S. Stanman/i }).should('exist')
        cy.findByRole('button', { name: /follow stan/i }).click()
      })
    })
    cy.findByRole('complementary', { name: /following users/i }).within(() => {
      cy.findByRole('list').within(() => {
        cy.findByRole('link', { name: /Stan S. Stanman/i }).should('exist')
      })
    })
    cy.findByRole('complementary', { name: 'users to follow' }).within(() => {
      cy.findByRole('list').within(() => {
        cy.findByRole('button', { name: /unfollow stan/i }).click()
        cy.findByRole('button', { name: /follow stan/i }).should('exist')
        cy.findByRole('link', { name: /Stan S. Stanman/i }).click()
        cy.location().should(loc => {
          expect(loc.pathname).to.eq('/stan')
        })
      })
    })
  })
  it('should allow to post a new message and see at the wall', () => {
    cy.findByRole('main').within(() => {
      cy.findByRole('textbox').type('Hello from cypress!')
      cy.findByRole('button').click()
    })
    cy.findByRole('region', { name: /home wall/i }).within(() => {
      cy.findAllByText(/Hello from cypress!/i).should('exist')
    })
  })
})
