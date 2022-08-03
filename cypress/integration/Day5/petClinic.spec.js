
import { petClinicURL, benutzername, passcode } from "../../support/authentication.constant"


describe("PetClinic Login", () => {

    beforeEach("Navigate to petClinic.de", () => {

        cy.visit(petClinicURL)
    })

    it("Login to PetClinic", () => {

        cy.get().clear().type(benutzername)
        cy.get().clear().type(passcode)
        cy.get().click()

    })

})