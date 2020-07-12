describe('User Details', () => {
  beforeEach(() => {
    cy.visit('/chsmith')
  })
  it('should allow to see user wall with his name as heading and the posts in it', () => {
    cy.findByRole('main').within(() => {
      cy.findByRole('region', { name: 'user details wall' }).within(() => {
        cy.findByRole('heading', { name: 'Wall' }).should('exist')
        cy.findAllByRole('article').should('exist')
      })
    })
  })
  it('should allow to go back', () => {
    cy.findByRole('button', { name: 'back button' }).click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/')
    })
  })
})
