/// <reference types="cypress"/>


describe('Checkbox Testing', () => {

    it('Checkbox Testing', () => {

        cy.visit('http://practice.cybertekschool.com/checkboxes')

        cy.viewport('samsung-note9') 
        // -> We can change it to ipad-iphone - Samsungnote 10 or Macbook..  
        cy.wait(2000)
        // => '.should' -> represented by 'assert' in Test Runner Page
        cy.get('#box1').check().should('be.checked')   
        // cy.get('#box1').check().should('not.be.checked')
        cy.wait(2000)
        cy.get('[name="checkbox2"]').click().should('not.be.checked')

    })



})                       