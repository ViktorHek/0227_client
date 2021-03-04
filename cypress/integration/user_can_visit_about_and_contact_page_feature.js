describe('User can successfully', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('visit about page', () => {
    cy.get("[data-cy='about-header']").click()
    cy.get("body").should('contain', 'about to go bananas')
  })
  it('visit contact page', () => {
    cy.get("[data-cy='contact-header']").click()
    cy.get("body").should('contain', 'Mail: xyz@mail.com')
  })
})