
import {modelSURL} from './authentication.constant';
// place the whole data from modelsPage.json to var 'data'
var data = require('../fixtures/modelsPage.json')

export class ModelS{

urlverification(){
  cy.wait(500)
  cy.contains('Model S').click()
  // assertion:
  cy.url().should('eq',modelSURL)
}

privacy_verification(){
 // scroll the webpage all the way down:   
    cy.scrollTo('bottomLeft')
// inspect some elements by XPATH.Then create an each loop:
cy.get('[class="tds-link tcl-link"]').each(($el, index)=>{

    const text = $el.text()
    expect(text).to.contain(data.ModelS[index])
})
}

}

export const onModelSPage = new ModelS