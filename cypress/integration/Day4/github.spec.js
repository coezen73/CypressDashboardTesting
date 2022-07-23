

import {githubURL} from '../../support/authentication.constant'
import { ongithubPage } from '../../support/github'

describe('Github Page Test Cases' ,()=>{

    beforeEach('Navigate to github.com',()=>{

        cy.visit(githubURL)
    })

    it('Login to github', ()=>{

        ongithubPage.verifySignInUrl()

    })
    it('Navigate back',()=>{  

        ongithubPage.navigateToMainPage()
    })

})