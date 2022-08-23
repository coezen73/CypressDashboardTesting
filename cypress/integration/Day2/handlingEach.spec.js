///<reference types="cypress"/>

var data= require('../../fixtures/staging.json')// I create a method called 'data' to pull the info 
                                                // from a json file (path)
describe('Handling each function', () => {


    before(function () {

    // I hardcoded, because 'wikipedia credentials are in cypress.json
        cy.visit('https://opensource-demo.orangehrmlive.com/') 
    // 'clear' method is important to be sure that its ready to type new syntax   
        cy.get('[name="username"]').clear().type('Admin') 
        cy.get('[name="password"]').clear().type('admin123')     
        cy.get('[type="submit"]').click()           // (# = id)

    })

    it('Testing each Text ', () => {
      // get all(each) 'td elements': for each loop-> run each of them one by one
        cy.get(['class="orangehrm-container"']).each((element, index) => { 
         // I sorted each elements by index number
         
            cy.log('element: ', element.text()) // printed each of them in console
            // need to convert to the text to be able to use in expect method:
            const text = element.text() 
        expect(text).to.contain(data.quicklaunch[index]) // I got things from 'data' method
         //  expect(text).to.contain(information.quicklaunch[index])
         // we can also use .eq() instead of using .contain()

        })

    })

})