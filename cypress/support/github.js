
import{githubLoginURL} from '../support/authentication.constant' 

export class github{

verifySignInUrl() {
    cy.contains("Sign in").click()
    cy.url().should('eq', githubLoginURL)
 }
 navigateToMainPage(){
    cy.go('back')

 }

}



export const ongithubPage = new github