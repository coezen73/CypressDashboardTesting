// I CAN NOT RUN THE TEST CASES; BECAUSE. -> 1:MY PAGE IS IN GERMAN; 
//2: Before go to the login page, I HAVE POP UP(Alert) FRAME WHICH 
// THEY DID NOT SHOW HOW TO HANDLE WITH IT YET!!!!

describe('Facebook  Login Page Smoke Test', () => {


    it('Positive Testing', ()=>{

        cy.login()
    })


    it('Right username, wrong password, Negative Testing', () => {
        cy.Wrong_Password_Testing()

    })

    it('Wrong username, right password, Negative Testing ', () => {
        cy.Wrong_Username_Testing()
    })

    it('Wrong username and wrong password, Negative Testing ', () => {
        cy.Wrong_Username_And_Password_Testing()

    })

})
