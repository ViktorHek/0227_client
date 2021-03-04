describe('User can successfully', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('visit about page', () => {
    cy.get("[data-cy='about-header']").click()
    cy.get("body").within(() => {
      cy.get("[data-cy='about-text']").should('contain', 'about to go bananas')
    })
  })
  it('visit contact page', () => {
    cy.get("[data-cy='contact-header']").click()
    cy.get("body").within(() => {
      cy.get("[data-cy='contact-text']").should('contain', 'email: xyz@mail.com')
    })
  })
})