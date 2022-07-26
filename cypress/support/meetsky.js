import { meetskyURL } from './authentication.constant'

export class Meetsky {

    urlVerification(){
        cy.wait(500)
        cy.contains('Model 3').click()
        cy.url().should('eq', meetskyURL)
        cy.contains('Model 3').should('be.visible')
        
     } 

}

export const onMeetSky = new Meetsky