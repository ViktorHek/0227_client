describe('User can see list of products', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('GET', '**/products', {fixture: 'product_index.json'})
    //'http://localhost:3000/api/products' 
  })
  it('successfully', () => {
    cy.get("[data-cy='köp-header']").click()
    cy.get("body").within(() => {
      cy.get("[data-cy='product-1']").should('contain', 'custum sko')
      cy.get("[data-cy='product-3']").should('contain', 'tavla')
    })
  })
})
