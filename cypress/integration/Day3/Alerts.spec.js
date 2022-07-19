
describe('JS Alerts Testing', () => {

// we can handle visiting the web page each and every time here: 
  beforeEach('Login the Page', ()=>{

    cy.visit('http://practice.cybertekschool.com/javascript_alerts')

  })
      /* -----------------CLICK ONLY FOR OK---------------------------------------

     very easy -> It clicks directly to OK button by using.click() only.
    Basically in cypress, we deal with alert boxes by using '.on()' method 
    When we want to get the alert message from an alert box ->   cy.on('window:alert',(str)=>{
                                                         //   expect(str).to.equal("I am a JS Alert")  */

    it('Handling JS Alert  -Validate Alert Text and Click OK', () => {
 
        cy.get('[onclick="jsAlert()"]').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal("I am a JS Alert")
        })
             
        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })

    //------------CONFIRMING (ok/cancel) AND CLICKING TO JS ALERT---------------------------------

    // CLICK OK.
    it('Handling JS Confirm -Click OK', () => {


        cy.get('[onclick="jsConfirm()"]').click()

        // .on() basically verifies "I am a JS Confirm" text on the alert box:
        cy.on('window:confirm', (str) => {
            // assert:
            expect(str).to.equal("I am a JS Confirm")
        })

        // true -> it will click 'OK'
        cy.on('window:confirm', () => true);
        cy.get('#result').should('have.text', 'You clicked: Ok')

    })

    // CLICK CANCEL:
    it('Handling JS Confirm -Click cancel', () => {
      

        cy.get('[onclick="jsConfirm()"]').click()

        cy.on('window:confirm', (str) => {
            // assert:
            expect(str).to.equal("I am a JS Confirm")
        })

        // false -> it will click 'cancel'= test will fail. 
        cy.on('window:confirm', () => false);
        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })

    //-------------------------CLICK AND PROMPT WITH JS--------------------------------

    it('Handling JS Promp - Input text in promt, Click OK and Validate Input Text', () => {

        cy.window().then(($window) => {

            cy.stub($window, 'prompt').returns('This is a test text')

            cy.get('[onclick="jsPrompt()"]').click()
        })

        cy.get('#result').should('have.text', 'You entered: This is a test text')

    })
})

