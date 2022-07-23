
//-------------------------------------------------------------------------------
// I CAN NOT RUN THE TEST CASES; BECAUSE. -> 1: MY PAGE IS IN GERMAN; 
//2: Before go to the login page, I COOKIE FRAME WHICH 
// THEY DID NOT SHOW HOW TO HANDLE WITH IT YET!!!!

// cy.clearCookie()
// To clear a browser cookie, use the cy.clearCookie() command.

// cy.getCookie('token').should('be.null')

// cy.get('#clearCookie .set-a-cookie').click()

// cy.getCookie('token').should('have.property', 'value', '123ABC')

// // cy.clearCookies() yields null
// cy.clearCookie('token').should('be.null')

// cy.getCookie('token').should('be.null')


import { username,password,wrongpassword,wrongusername,url } from './authentication.constant'



Cypress.Commands.add('login',()=>{
  
    cy.get('#email').clear().type(username)
    cy.get('[type="password"]').clear().type(password)

    cy.contains('Log In').click()
})

Cypress.Commands.add('wrong_username_Testing',()=>{
    cy.visit(url)
    cy.get('#email').clear().type(wrongusername)
    cy.get('[type="password"]').clear().type(password)

    cy.contains('Log In').click()

    cy.get('.uiHeaderTitle').should('be.visible')
})

Cypress.Commands.add('wrong_password_Testing',()=>{
    cy.visit(url)
    cy.get('#email').clear().type(username)
    cy.get('[type="password"]').clear().type(wrongpassword)

    cy.contains('Log In').click()

    cy.get('.uiHeaderTitle').should('be.visible')
})

Cypress.Commands.add('wrong_username_password_Testing',()=>{
    cy.visit(url)
    cy.get('#email').clear().type(wrongusername)
    cy.get('[type="password"]').clear().type(wrongpassword)

    cy.contains('Log In').click()

    cy.get('.uiHeaderTitle').should('be.visible')
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

