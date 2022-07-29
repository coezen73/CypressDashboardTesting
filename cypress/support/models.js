// OOP Concept

//Get the URL.
import { modelSURL } from "./authentication.constant"
//place the whole data from modelsPage.json to var 'data'
var data = require('../fixtures/modelsPage.json')
var comparePage = require('../fixtures/comparePage.json')

export class modelS{
//create a function(method):
urlVerification(){
    cy.wait(500)
    cy.contains('Model S').click()
//assertion by URL:
    cy.url().should('eq', modelSURL)
    cy.contains('Model S').should('be.visible')
        
}

privacy_Verification(){
//scroll the webpage all the way down:    
    cy.scrollTo('bottomLeft')
//inspect some elements by XPATH.Get the class attribute.Create an each loop:
    cy.get('[class="tds-link tcl-link"]').each(($el,index)=>{

        const text =$el.text()
        expect(text).to.contain(data.ModelS[index])
    })
}

//Navigate to  page https://www.tesla.com/models
//click compare
//check every single test on the page

modelScomparePage(){
    cy.contains('Compare').click()
    cy.wait(1000)
    cy.url().should('eq','https://www.tesla.com/compare')
    cy.scrollTo('bottomLeft')
    cy.get('.tds-icon-crosshatch').click()
   
    cy.get('[class="tds-text--caption tcl-compare-models__item-title"]').each(($el,index)=>{

        const text =$el.text()
        expect(text).to.contain(comparePage.comparePageText[index])
    })
}


}
//I have created my Tesla-'new model' object as well.. 
export const onModelSPage = new modelS