describe('user can login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  describe('successfully', () => {
    beforeEach(() => {
      cy.server()
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/auth/sign_in',
        response: 'fixture:user_can_login.json',
        headers: {
          uid: 'user@example.com',
          access_token: 'acab',
          client: '1337',
          token_type: 'Bearer',
          expiry: 123456,
        },
      })
    })
    it('with valid credentials', () => {
      cy.get("[data-cy='login-form']").within(() => {
        cy.get("[data-cy='email']").type('user@example.com')
        cy.get("[data-cy='password']").type('password')
        cy.get("[data-cy='login-button']").click()
      })
      cy.get("[data-cy='create-form']").should('be.visible')
    })
  })

  describe('unsuccessfully', () => {
    it('with wrong credentials', () => {
      cy.get("[data-cy='login-form']").within(() => {
        cy.get("[data-cy='email']").type('wrong@example.com')
        cy.get("[data-cy='password']").type('wrong')
        cy.get("[data-cy='login-button']").click()
      })
      cy.get("[data-cy='create-form']").should('not.be.visible')
    })
    cy.on('window:alert', (str) => {
      expect(str).to.equal("You Shall Not Pass!!")
    })
  })
})