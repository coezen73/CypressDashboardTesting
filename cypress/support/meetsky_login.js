
import { Username, Password, Wrong_username, Wrong_password, meetskyURL } from './authentication.constant'


Cypress.Commands.add('pageLogin', () => {

    cy.get('[type="text"]').clear().type(Username)
    cy.get('[type="password"]').clear().type(Password)
    cy.get('#submit-form').click()
})

Cypress.Commands.add('Wrong_Username_Testing', () => {

    // cy.visit(meetskyURL)
    cy.wait(2000)
    cy.get('[type="text"]').clear().type(Wrong_username)
    cy.get('[type="password"]').clear().type(Password)
    cy.get('#submit-form').click()
    cy.get('.v-align').contains('Falscher Benutzername oder Passwort')
        .should('be.visible')

})

Cypress.Commands.add('Wrong_Password_Testing', () => {

    //cy.visit(meetskyURL)
    cy.wait(2000)
    cy.get('[type="text"]').clear().type(Username)
    cy.get('[type="password"]').clear().type(Wrong_password)
    cy.get('#submit-form').click()
    cy.get('.v-align').contains('Falscher Benutzername oder Passwort')
        .should('be.visible')

})

Cypress.Commands.add('Wrong_Username_And_Password_Testing', () => {

    //cy.visit(meetskyURL)
    cy.wait(2000)
    cy.get('[type="text"]').clear().type(Wrong_username)
    cy.get('[type="password"]').clear().type(Wrong_password)
    cy.get('#submit-form').click()
    cy.get('.v-align').contains('Falscher Benutzername oder Passwort')
        .should('be.visible')

})

Cypress.Commands.add('Empty_Password_Field_Test', () => {

    cy.get('[type="text"]').clear().type(Username)
    cy.get('[type="password"]').clear()
    cy.get('#submit-form').trigger('mouseover').click()
    cy.on('window:alert', (str) => {
        expect(str).to.equal("Please fill out this field.")
        cy.get('.v-align').contains('Please fill out this field.')
            .should('be.visible')

    })

    Cypress.Commands.add('Empty_Username_Field_Test', () => {

        cy.get('[type="text"]').clear()
        cy.get('[type="password"]').clear().type(Password)
        cy.get('#submit-form').trigger('mouseover').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Please fill out this field.")
            cy.get('.v-align').contains('Please fill out this field.')
                .should('be.visible')

        })

    })

    Cypress.Commands.add('Empty_Username_And_Password_Field_Test', () => {

        cy.get('[type="text"]').clear()
        cy.get('[type="password"]').clear()
        cy.get('#submit-form').trigger('mouseover').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Please fill out this field.")
            cy.get('.v-align').contains('Please fill out this field.')
                .should('be.visible')

        })

    })

})



