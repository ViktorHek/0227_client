describe('user can see title', () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("successfully", () => {
    cy.get("body").should("contain", "0227 official page")
  })
});