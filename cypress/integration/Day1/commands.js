//visit:                            ->  We can use anything, which is inside the cypress by using this command.
                                    //  REMEMBER TO PLACE ON TOP OF YOUR TEST CASES!
<reference types="cypress" />           // <- Plugins/index.js file

cy.visit('open url')
cy.visit('url',{timeout : 10000})       // We add 10 seconds as waiting time. If it wont reach the url, it will throw an exeption

// should (it is a  kind of promise):
let path ='https://www.google.com'
cy.url().should('include', path)   // <- we have auto-coming different type of assertions in the first ''.

//finding the element:
cy.get(loc).click()                 // cy.get will bring some webelements / .click() is going to click the element(s)
cy.get(loc).should('be.visible')    // This webelement is visible or not?
cy.get(loc).should('be.exist')      //  This ´webelement exist or not?

// negative commands:
cy.get(loc).should('not.be.visible') // when the element(s) shouldn't be visible..
cy.get(loc).should('not.be.exist') 

cy.get('h1').should('have.length',3)   // Basically if every query fit with the command, than system will assort..
cy.get('h1').should('have.text','blablabla')
cy.get('h1').should('have.value','cypress')

//---------------------------------------------------------------------------------------------------------------------------------------

// Going from Parent to the Child class:
                                    // In cypress we dont use that much of xpath: means 
                                    //-> we will start with the parents and all way go down to the child.
cy.get(loc).first()     
cy.get(loc).last()
cy.get(loc).eq(1).click()      // <- we can also have any other indexes..

// navigate the webpage to previous page:
cy.go('back')

// to be able to click on each web table element one by one:
cy.get('tbody tr').nextAll.click({multiple:true})   // Lets say for 10 elements
cy.go('back')

cy.get(loc).prev.click()
cy.get(loc).prevALL.click({multiple:true});
 
// hover handling:
cy.get(loc).trigger('mouseover').click // It comes to the specific locator-element and click it
cy.get(loc).trigger('mouseup').click // we can click on the button up- left - right - center -down .. wherever we want to.

// clear the box and type it:
cy.get('username').clear().type('username') 
