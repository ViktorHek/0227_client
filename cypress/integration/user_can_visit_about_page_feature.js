describe('User can see list of products', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('successfully', () => {
    cy.get("[data-cy='about-header']").click()
    cy.get("body").within(() => {
      cy.get("[data-cy='about-text']").should('contain', 'about to go bananas')
    })
  })
})