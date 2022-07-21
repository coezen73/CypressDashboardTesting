

import {githubURL} from '../../support/authentication.constant'
import { ongithubPage } from '../../support/github'

describe('Udemy Test Cases' ,()=>{

    beforeEach('Navigate to udemy.com',()=>{

        cy.visit(githubURL)
    })

    it('Login to github', ()=>{

        ongithubPage.verifySignInUrl()

    })
    it('Navigate back',()=>{  

        ongithubPage.navigateToMainPage()
    })

})