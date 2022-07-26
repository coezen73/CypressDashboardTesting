
import { meetskyURL } from '../../support/authentication.constant'
import { onMeetsky } from '../../support/meetsky_commands'


describe('MeetSky Automation Testing', () => {
  // go to the meetsky.net for each test case
  beforeEach("Navigate to meetSky.net", () => {

    cy.visit(meetskyURL)

  })
  // As a user I should be able to login with valid credentials.
  it("Login with valid credentials", () => {

    cy.pageLogin()
    cy.url().should('include', '/index.php/apps/files/?dir=/&fileid=957')

  })

  it('Wrong username, right password, Negative Testing', () => {
    cy.Wrong_Username_Testing()

  })

  it('Right username, wrong password, Negative Testing', () => {
    cy.Wrong_Password_Testing()

  })

it('Wrong username, wrong password, Negative Testing', () => {
    cy.Wrong_Username_And_Password_Testing()

  })
  



})

