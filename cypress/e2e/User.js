describe('User page', () => {
  beforeEach(() => {
    cy.visit('/guybrush')
  })
  it('should allow to see user wall with his name as heading and the posts in it', () => {
    cy.findByRole('main').within(() => {
      cy.findByRole('banner', { name: 'user details' }).within(() => {
        cy.findByRole('heading', { name: 'Guybrush Threepwood' }).should(
          'exist'
        )
      })
      cy.findByRole('region', { name: 'user wall' }).within(() => {
        cy.findAllByRole('article').should('exist')
      })
    })
  })
  it('should allow to go back home', () => {
    cy.findByRole('button', { name: 'navigate home' }).click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/')
    })
  })
})
