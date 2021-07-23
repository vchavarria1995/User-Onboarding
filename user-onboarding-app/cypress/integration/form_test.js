describe('User Onboarding App', () => {
    const userName = () => cy.get('[name="name"]')
    const userEmail = () => cy.get('[name="email"]')
    const userPassword = () => cy.get('[name="Password"]')

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Renders properly', () => {
        userName().should('exist')
        userEmail().should('exist')
        userPassword().should('exist')
    })

    it('Can type in inputs', () => {
        const name = 'Victor'
        const email = 'vic@notarealemail.com'
        const password = 'notarealpassword'

        userName().type(name).should('have.value', name)
        userEmail().type(email).should('have.value', email)
        userPassword().type(password).should('have.value', password)
    })

    it('Can accept tos', () => {
        cy.get('[type="checkbox"]').check()
        cy.get('[type="checkbox"]').should('be.checked')
    })

    it('Can submit form', () => {
        cy.get('form').submit
    })

    it('Cannot submit empty form', () => {
        userName().clear()
        cy.get('[type="Submit"]').should('be.disabled')
    })
})