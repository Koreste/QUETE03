
describe("Formualaire Blackmarket",()=>{
    beforeEach(() => {
        cy.intercept('POST').as('New_user')
        cy.visit('https://practice.expandtesting.com/notes/api/api-docs/#/Users/post_users_register')
    })
    it("attendre chargez données", () =>{
        cy.fixture('QUETE03').then( user => {
        cy.contains("Try it out").click()
        cy.get('[placeholder="name"]').type(user.name)
        cy.get('[placeholder="email"]').type(user.email)
        cy.get('[placeholder="password"]').type(user.mdp)
        cy.contains('Execute').click()
        cy.get('#operations-Users-post_users_register > .opblock-summary > .opblock-control-arrow').click()
        cy.get("#operations-Users-post_users_login").click()
        cy.get('#operations-Users-post_users_login > .no-margin > .opblock-body > .opblock-section > .opblock-section-header > .try-out ').click()
        cy.get('[placeholder="email"]').type(user.email)
        cy.get('[placeholder="password"]').type(user.mdp)
        cy.contains('Execute').click()
        cy.get('.auth-wrapper > .btn').click()
        cy.get('#api_key_value').type(user.token)
        cy.get('.auth-btn-wrapper > .authorize').click()
        cy.contains("Close").click()
        cy.get('#operations-Users-post_users_login > .opblock-summary > .opblock-summary-control').click()
        cy.get('#operations-Notes-post_notes > .opblock-summary').click()
        cy.contains("Try it out").click()
        cy.get('[placeholder="title"]').type("Quete")
        cy.get('[placeholder="description"]').type("Quete03 note")
        cy.get('.parameters-col_description > select').select("Work")
        cy.contains('Execute').click()

    })
    })
})
