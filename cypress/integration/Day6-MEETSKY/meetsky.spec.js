
import { meetskyURL} from '../../support/authentication.constant'
import { onMeetsky } from '../../support/meetsky_commands'


describe('MeetSky Automation Testing',()=>{

    beforeEach("Navigate to meetSky.net",()=>{
       
          cy.visit(meetskyURL)

        })

        it('URL verification', ()=>{

            onMeetsky.urlVerification()

        })

        it("Page Login", ()=>{
            
             cy.pageLogin()  

              })

    
})