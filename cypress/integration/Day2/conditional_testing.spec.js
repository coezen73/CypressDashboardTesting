///<reference types="cypress"/>

describe('Conditional Testing', () => {  // BASICALLY WE USE IF-ELSE STATEMENTS

    it('Test Vikivoyage exist using length', () => {
        // -> linked to baseUrl: cypress.json file -> I am on the wikipedia page
        cy.visit('/')  
        // -> 'Get' the whole body, put everything inside the 'body'
        cy.get('body').then((body) => { 
        // -> find me wikivoyage inside the body:
        // if it's exist(.length > 0);
            if (body.find('[data-jsl10n="wikivoyage.name1"]').length > 0) { 
                // get it and  click on it.
                cy.get('[data-jsl10n="wikivoyage.name"]').click() 
                // then make an assertion by checking the url:
                cy.url().should('eq', 'https://www.wikivoyage.org/')
            // other wise (if not); 
            } else { 
                // get and click the 'commons` on the page 
                cy.get('[data-jsl10n="commons.slogan"]').click() 
                //make an assertion with its url too:
                cy.url().should('eq', 'https://common.wikimedia.org/wiki/Main_Page')
            }

        })

    })
})



 //.then()-> Enables you to work with the subject yielded from the previous command / promise.