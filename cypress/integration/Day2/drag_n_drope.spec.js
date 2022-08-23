


describe('Drag and Drop Feature', () => {

    it('Drag & drop using in data transfer', () => {
        // First, visit the page:
        cy.visit('http://practice.cybertekschool.com/drag_and_drop')

        drag_and_drop()
    })

})


// This time we will create some sort of functions:
// Whenever I want to work with 'drag&drop', We need to use 'datatransfer Interface' from 'JS'

const datatransfer = new DataTransfer;

function drag_and_drop() {
 // we use .trigger() for 'drag & drop'
    cy.get('#column-a').should('be.visible').trigger('dragstart')
    cy.wait(1500)
    cy.get('#column-b').should('be.visible').trigger('drop', { datatransfer })
    cy.wait(1500)
    cy.get('#column-b').should('be.visible').trigger('dragend')
}
