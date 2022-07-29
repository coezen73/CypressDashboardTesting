
import { orangeHrmURL, UserName, PassWord, Wrong_UserName, Wrong_PassWord } from './authentication.constant'



Cypress.Commands.add('page_Login', () => {

    cy.get('[name="txtUsername"]').clear().type(UserName)
    cy.get('#txtPassword').clear().type(PassWord)
    cy.get('[class="button"]').click()
    cy.wait(1000)
    
})

Cypress.Commands.add('Wrong_Username_Testing', () => {

    cy.get('[name="txtUsername"]').clear().type(Wrong_UserName)
    cy.get('#txtPassword').clear().type(PassWord)
    cy.get('[class="button"]').click()
    cy.get('#spanMessage').should('be.visible')

})

Cypress.Commands.add('Wrong_Password_Testing', () => {

    cy.get('[name="txtUsername"]').clear().type(UserName)
    cy.get('#txtPassword').clear().type(Wrong_PassWord)
    cy.get('[class="button"]').click()
    cy.get('#spanMessage').should('have.text', 'Invalid credentials')
})

Cypress.Commands.add('Wrong_Username_And_Password_Testing', () => {


    cy.get('[name="txtUsername"]').clear().type(Wrong_UserName)
    cy.get('#txtPassword').clear().type(Wrong_PassWord)
    cy.get('[class="button"]').click()
    cy.get('#spanMessage').should('have.text', 'Invalid credentials')
})

Cypress.Commands.add('Empty_Password_Field_Test', () => {

    cy.get('[name="txtUsername"]').clear().type(UserName)
    cy.get('#txtPassword').clear()
    cy.get('[class="button"]').trigger('mouseover').click()
    cy.get('#spanMessage').should('have.text', 'Password cannot be empty')

})

Cypress.Commands.add('Empty_Username_Field_Test', () => {

    cy.get('[name="txtUsername"]').clear()
    cy.get('#txtPassword').clear().type(PassWord)
    cy.get('[class="button"]').trigger('mouseover').click()
    cy.get('#spanMessage').should('have.text', 'Username cannot be empty')

})

Cypress.Commands.add('Empty_Username_And_Password_Field_Test', () => {

    cy.get('[name="txtUsername"]').clear()
    cy.get('#txtPassword').clear()
    cy.get('[class="button"]').trigger('mouseover').click()
    cy.get('#spanMessage').should('have.text', 'Username cannot be empty')

})

