describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should allow to follow new users, see their details and unfollow if they just were followed', () => {
    cy.findByRole('complementary', { name: 'users to follow' }).within(() => {
      cy.findByRole('textbox').type('Ann')
      cy.wait(1000)
      cy.findByRole('list').within(() => {
        cy.findByRole('link', { name: /Anna Harrison/i }).should('exist')
        cy.findByRole('button', { name: /follow aharrison/i }).click()
      })
    })
    cy.findByRole('complementary', { name: 'following users' }).within(() => {
      cy.findByRole('list').within(() => {
        cy.findByRole('link', { name: /Anna Harrison/i }).should('exist')
      })
    })
    cy.findByRole('complementary', { name: 'users to follow' }).within(() => {
      cy.findByRole('list').within(() => {
        cy.findByRole('button', { name: /unfollow aharrison/i }).click()
        cy.findByRole('button', { name: /follow aharrison/i }).should('exist')
        cy.findByRole('link', { name: 'Anna Harrison' }).click()
        cy.location().should(loc => {
          expect(loc.pathname).to.eq('/aharrison')
        })
      })
    })
  })
  it('should allow to post a new message and see at the wall', () => {
    cy.findByRole('main').within(() => {
      cy.findByRole('textbox').type('Hello from cypress!')
      cy.findByRole('button').click()
    })
    cy.findByRole('region', { name: 'home wall' }).within(() => {
      cy.findByRole('heading', { name: 'Wall' })
      cy.findAllByText('Hello from cypress!').should('exist')
    })
  })
})
