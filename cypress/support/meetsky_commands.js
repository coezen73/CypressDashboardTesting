
import {Username,Password,meetskyURL } from './authentication.constant'


Cypress.Commands.add('pageLogin',()=>{
  
    cy.get('[type="text"]').clear().type(Username)
    cy.get('[type="password"]').clear().type(Password)

    cy.contains('#submit-form').click()
})

// Cypress.Commands.add('wrong_username_Testing',()=>{
//     cy.visit(url)
//     cy.get('#email').clear().type(wrongusername)
//     cy.get('[type="password"]').clear().type(password)

//     cy.contains('Log In').click()

//     cy.get('.uiHeaderTitle').should('be.visible')
// })

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
