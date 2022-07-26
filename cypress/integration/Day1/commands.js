//visit:                           
// ->  We can use anything, which is inside the cypress by using this command.
//  REMEMBER TO PLACE ON TOP OF YOUR TEST CASES!
<reference types="cypress" />      // <- Plugins/index.js file

cy.visit('open url')
// We add 10 seconds as waiting time. If it wont reach the url, it will throw an exeption
cy.visit('url',{timeout : 10000})      
// should (it is a  kind of promise):
let path ='https://www.google.com'
cy.url().should('include', path)   
//In should(), we have auto-coming different type of assertions in the first ''.
//finding the element: get() is equal to find() method in selenium
cy.get('locator').click()  // cy.get will bring some webelements/.click() click the element(s)
// This webelement is visible or not?
cy.get('locator').should('be.visible')  
// This ´webelement exist or not?
cy.get('locator').should('be.exist')      

// negative commands:
// when the element(s) shouldn't be visible..
cy.get('locator').should('not.be.visible') 
cy.get('locator').should('not.be.exist') 

// Basically if every query fit with the command, than system will assort..
cy.get('h1').should('have.length',3)  
cy.get('h1').should('have.text','blablabla')
cy.get('h1').should('have.value','cypress')

//---------------------------------------------------------------------------------------------------------------------------------------

// Going from Parent to the Child class:
// In cypress we dont use that much of xpath: means 
//-> we will start with the parents and all way go down to the child.

cy.get('locator').first()     
cy.get('locator').last()
cy.get('locator').eq(1).click()    // <- we can also have any other indexes..

// navigate the webpage to previous page:
cy.go('back')

// to be able to click on each web table element one by one:
cy.get('tbody tr').nextAll.click({multiple:true})   // Lets say for 10 elements
cy.go('back')

cy.get('locator').prev.click()
cy.get('locator').prevALL.click({multiple:true});

// position handling
// https://the-internet.herokuapp.com.login
cy.get('locator').click('top')
cy.get('locator').click('bottom')
cy.get('locator').click('topleft')
 
// hover handling:
// It comes to the specific locator-element and click it
cy.get('locator').trigger('mouseover').click() 
// we can click on the button up- left - right - center -down .. wherever we want to.
cy.get('locator').trigger('mouseup').click() 
// clear the box and type it the new one we want to type:
cy.get('username').clear().type('username') 
