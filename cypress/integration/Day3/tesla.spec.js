// OOP Concept



import {teslaURL} from '../../support/authentication.constant'
import { onModelSPage } from '../../support/models'

describe('tesla.com Automation Testing', ()=>{

    beforeEach("Navigate to tesla.com",()=>{
    // I use import file 
        cy.visit(teslaURL)
    })

    it("Test One - Model-S, page testing ", ()=>{
  // Use the functions that we create on 'Model S Page'
        onModelSPage.urlverification()
        onModelSPage.privacy_verification()
        onModelSPage.modelScomparePage()
    })

})


