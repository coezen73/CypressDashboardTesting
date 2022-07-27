/// <reference types="cypress"/>


describe('Checkbox Testing', () => {

    it('Checkbox Testing', () => {

        cy.visit('http://practice.cybertekschool.com/checkboxes')

        cy.viewport('samsung-note9')    // -> We can change it to ipad-iphone - Samsungnote 10 or Macbook..  
        cy.wait(2000)
        cy.get('#box1').check().should('be.checked')  // => '.should' -> represented by 'assert' in Test Runner Page
                                                             // get the element, check it and assert it if it is checked or not;  
        cy.wait(2000)                                         // cy.get('#box1').check().should('not.be.checked')
        
        cy.get('[name="checkbox2"]').click().should('not.be.checked')

    })



})                       