describe('admin can create a product', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      '**/sign_in',
      { fixture: 'user_can_login.json' },
      {
        headers: {
          uid: 'user@example.com',
          access_token: 'acab',
          client: '1337',
          token_type: 'Bearer',
          expiry: 123456,
        },
      }
      // 'http://localhost:3000/api/auth/sign_in'
    )
    cy.visit('/')
    cy.get("[data-cy='login-form']").within(() => {
      cy.get("[data-cy='email']").type('user@example.com')
      cy.get("[data-cy='password']").type('password')
      cy.get("[data-cy='login-button']").click()
    })
  })
  describe('successfully', () => {
    it('with a title', () => {
      cy.intercept(
        'POST',
        '**/products',
        { message: 'grejen är skapad' },
        // 'http://localhost:3000/api/products'
      )
      cy.get("[data-cy='create-form']").within(() => {
        cy.get("[data-cy='create-title']").type('En sko')
        cy.get("[data-cy='create-description']").type(
          'En förklaring av produkten'
        )
        cy.get("[data-cy='create-bild']").attachFile('Bild.png')
        cy.get("[data-cy='create-btn']").click()
      })
      cy.on('window:alert', (str) => {
        expect(str).to.equal('grejen är skapad')
      })
    })
  })

  describe('unsuccessfully', () => {
    it('without a title', () => {
      cy.intercept(
        'POST',
        '**/products',
        { message: "title can't be blank" }
        // 'http://localhost:3000/api/products'
      )
      cy.get("[data-cy='create-form']").within(() => {
        cy.get("[data-cy='create-btn']").click()
      })
      cy.on('window:alert', (str) => {
        expect(str).to.equal("title can't be blank")
      })
    })
  })
})
