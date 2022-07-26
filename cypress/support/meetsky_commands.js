
import { Username, Password, Wrong_username, Wrong_password, meetskyURL } from './authentication.constant'


Cypress.Commands.add('pageLogin', () => {

    cy.get('[type="text"]').clear().type(Username)
    cy.get('[type="password"]').clear().type(Password)
    cy.get('#submit-form').click()
})

Cypress.Commands.add('Wrong_Username_Testing', () => {

    cy.visit(meetskyURL)
    cy.wait(2000)
    cy.get('[type="text"]').clear().type(Wrong_username)
    cy.get('[type="password"]').clear().type(Password)
    cy.get('#submit-form').click()
    cy.get('.v-align').contains('Falscher Benutzername oder Passwort')
        .should('be.visible')

})

Cypress.Commands.add('Wrong_Password_Testing', () => {

    cy.visit(meetskyURL)
    cy.wait(2000)
    cy.get('[type="text"]').clear().type(Username)
    cy.get('[type="password"]').clear().type(Wrong_password)
    cy.get('#submit-form').click()
    cy.get('.v-align').contains('Falscher Benutzername oder Passwort')
        .should('be.visible')

})

Cypress.Commands.add('Wrong_Username_And_Password_Testing', () => {

    cy.visit(meetskyURL)
    cy.wait(2000)
    cy.get('[type="text"]').clear().type(Wrong_username)
    cy.get('[type="password"]').clear().type(Wrong_password)
    cy.get('#submit-form').click()
    cy.get('.v-align').contains('Falscher Benutzername oder Passwort')
        .should('be.visible')

})






   // cy.get('.uiHeaderTitle').should('be.visible')
//})

// Cypress.Commands.add('wrong_password_Testing',()=>{
//     cy.visit(url)
//     cy.get('#email').clear().type(username)
//     cy.get('[type="password"]').clear().type(wrongpassword)

//     cy.contains('Log In').click()

//     cy.get('.uiHeaderTitle').should('be.visible')
// })

// Cypress.Commands.add('wrong_username_password_Testing',()=>{
//     cy.visit(url)
//     cy.get('#email').clear().type(wrongusername)
//     cy.get('[type="password"]').clear().type(wrongpassword)

//     cy.contains('Log In').click()

//     cy.get('.uiHeaderTitle').should('be.visible')
// })

// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
// })
