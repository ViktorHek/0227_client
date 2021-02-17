describe('User can see list of products', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/products',
      response: 'fixture:product_index.json',
    })
    cy.visit('/')
  })
  it('successfully', () => {
    cy.get("[data-cy='köp-header']").click()
    cy.get("body").within(() => {
      cy.get("[data-cy='product-1']").should('contain', 'custum sko')
      cy.get("[data-cy='product-3']").should('contain', 'tavla')
    })
  })
})
