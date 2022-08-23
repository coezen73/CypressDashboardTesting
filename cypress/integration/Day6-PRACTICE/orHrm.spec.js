
import { orangeHrmURL, UserName, PassWord } from "../../support/authentication.constant"
var data = require('../../fixtures/mainMenu.json')

describe('orangeHrm Login Testing', () => {

  beforeEach("Navigate to orangehrmlive.com", () => {

    cy.visit(orangeHrmURL)
  })

  it("Login with valid user credentials", () => {

    cy.page_Login()

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

describe('Main Menu Headers', () => {

  beforeEach("Navigate to orangehrmlive.com and log in", () => {

    cy.visit(orangeHrmURL)
    cy.page_Login()
  })

  it("Get the main menu headers", () => {

    cy.wait(1000)
    cy.get('.oxd-main-menu-item-wrapper').each(($el, index) => {
      cy.log('$el: ', $el.text())
      const text = $el.text()
      expect(text).to.contain(data.firstLevelMenu[index])

    })

  })

//  // Check the Admin module functions:

//  it('Admin Module Function',()=>{

//   cy.wait(1000)
//   cy.get('#menu_admin_viewAdminModule').trigger('mouseover', '#menu_admin_nationality').click()

//  })

})


