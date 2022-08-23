
describe('radiobuttons Testing',()=>{


    it('radio buttons Test',()=>{
        cy.visit('http://practice.cybertekschool.com/radio_buttons')


        cy.get('[type="radio"]').then(radioButtons => {
            cy.wrap(radioButtons).first() // Wrap them together, then click the first one
     // I have multiple buttons, CY sometimes don't get which button ? -> push it to check the first one
            .check({force:true})         
            .should('be.checked')                       // assert

    // I can also use .eg(index) instead of .first()
            cy.wrap(radioButtons).eq(0) 
            .check({force:true})
            .should('be.checked')

    // I create a for loop to get and check the whole buttons
            for(var i = 0;  i<=radioButtons.length-1; i++){ 
                cy.wrap(radioButtons).eq(i)
                .check({force:true})
                .should('be.checked')
            }
        })

    })

})



