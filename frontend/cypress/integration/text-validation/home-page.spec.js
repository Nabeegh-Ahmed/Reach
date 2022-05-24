describe('home page text test', () => {
    before(() => {
        cy.visit('http://localhost:3000/')
    })

    it('displays 2 buttons in header', () => {
        cy.get('.header-buttons .header-button').should('have.length', 2)
    })

    it('displays 3 course cards', () => {
        cy.get('.course-card').should('have.length', 3)
    })

    it('should interact with the sign up modal', () => {
        cy.contains('Sign Up').click()
        cy.get('#SignUpModal').should('be.visible')
        cy.get('#SignUpModal').should('contain', 'Sign Up')
        cy.get('#SignUpModal-close-button').click()
    })

    it('should interact with the sign in modal', () => {
        cy.contains('Sign In').click()
        cy.get('#SignInModal').should('be.visible')
        cy.get('#SignInModal').should('contain', 'Sign In')
        cy.get('#SignInModal-close-button').click()
    })
})

