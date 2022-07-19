/// <reference types = "cypress"/>

describe("Web Elements",()=>{

    // Locating webelement by TAG NAME: 
    // -> by calling the 'tag name' in cypress, we are getting  tag name from webpage as an element
    cy.get('input')                  

    // Locating webelement by ID:
    // we always use '#' icon before writing an ID  
    cy.get('#radio1')                 
    cy.get('#yellow') 

    // Locating webelement by CLASS: 
    // we always use '.' icon before writing a class name.
    cy.get('.icheck-helper')         
    cy.get('.radio') 
    // Locating webelement by ATTRIBUTE NAME: 
    // we implement [], inside (' ') 
    cy.get('[type]')                 

    //Locating webelement by ATTRIBUTE NAME AND TYPE:
    cy.get('[name="abuse"]')  

    // Locating webelement by CLASS VALUE:
    cy.get('[class="icheck-helper]')  

    // Locating webelement by TAG NAME AND ATTRIBUTE WITH VALUE:
    cy.get('input [name="abuse"]') // or;
    cy.get('input #radio1')

    // Locating webelement by 2 OR MORE DIFFERENT ATTRIBUTES:
    cy.get('[name="abuse"][class="icheck-helper][style="position: absolute; opacity: 0;"]#radio1#yellow')

    //Locating webelement by CONTAINS METHOD:
    // -> We will use contains method mostly with elements with text
    cy.contains('Blue').click()    
})

