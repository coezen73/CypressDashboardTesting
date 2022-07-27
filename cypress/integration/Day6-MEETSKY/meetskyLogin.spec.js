
import { meetskyURL } from '../../support/authentication.constant'
import { onMeetsky } from '../../support/meetsky_commands'


describe('MeetSky Automation Testing', () => {
  // go to the meetsky.net for each test case
  beforeEach("Navigate to meetSky.net", () => {

    cy.visit(meetskyURL)

  })

// As a user, I should be able to login with valid credentials:

  it("User login with valid credentials", () => {

    cy.pageLogin()
    cy.url().should('include', '/index.php/apps/files/?dir=/&fileid=957')

  })

// As a user, I shouldn't be able to login with INVALID credentials:

  it('Wrong username, right password, Negative Testing', () => {
    cy.Wrong_Username_Testing()
  })
  it('Right username, wrong password, Negative Testing', () => {
    cy.Wrong_Password_Testing()
  })
  it('Wrong username, wrong password, Negative Testing', () => {
    cy.Wrong_Username_And_Password_Testing()
  })
  it('Blank password box, Negative Testing ', () => {
    cy.Empty_Password_Field_Test()
  }) 
  it('Blank username box, Negative Testing ', () => {
    cy.Empty_Username_Field_Test()
  })
  it('Blank username-password box, Negative Testing ', () => {
    cy.Empty_Username_And_Password_Field_Test()
  })


})

