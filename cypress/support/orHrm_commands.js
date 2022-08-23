
import { orangeHrmURL, UserName, PassWord, Wrong_UserName, Wrong_PassWord } from './authentication.constant'



Cypress.Commands.add('page_Login', () => {

    cy.get('[name="username"]').clear().type(UserName)
    cy.get('[name="password"]').clear().type(PassWord)
    cy.get('[type="submit"]').click()
    cy.wait(1000)
    
})

Cypress.Commands.add('Wrong_Username_Testing', () => {

    cy.get('[name="username"]').clear().type(Wrong_UserName)
    cy.get('[name="password"]').clear().type(PassWord)
    cy.get('[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')

})

Cypress.Commands.add('Wrong_Password_Testing', () => {

    cy.get('[name="username"]').clear().type(UserName)
    cy.get('[name="password"]').clear().type(Wrong_PassWord)
    cy.get('[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible' )
})

Cypress.Commands.add('Wrong_Username_And_Password_Testing', () => {


    cy.get('[name="username"]').clear().type(Wrong_UserName)
    cy.get('[name="password"]').clear().type(Wrong_PassWord)
    cy.get('[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible' )
})

