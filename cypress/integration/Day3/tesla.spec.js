



import {teslaURL} from '../../support/authentication.constant'
import { onModelSPage } from '../../support/models'

describe('tesla.com automation testing', ()=>{

    beforeEach("Navigate to tesla.com",()=>{

        cy.visit(teslaURL)
    })

    it("Test One", ()=>{

        onModelSPage.urlverification()
        onModelSPage.privacy_verification()

    })

})

