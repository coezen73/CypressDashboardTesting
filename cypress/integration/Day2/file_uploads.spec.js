// For file uploads we need to upload some dependencies:-> 
// google-> cypress file upload npm -> (npmjs.com) -> 
// Install the module ->(npm install cypress-uploadfile) -> follow the steps..
// npm install --save-dev cypress-file-upload 
//-> paste 'import 'cypress-file upload'; to command.js file
//-> //paste index.js-> Import commands.js using ES2015 syntax:  import './commands';


// --------------------------------------------------------------------------------

describe('File Upload',()=>{

    it('Png file upload', ()=>{         
        
        cy.visit('http://practice.cybertekschool.com/upload')
        // .attachfile() comes with the dependency 
        cy.get('#file-upload').attachFile('download.png')  
        cy.get('[class="button"]').click()

        cy.get('#uploaded-files').invoke('text', 'download.png').should('be.visible')
        // invoke() will get  any elements on the page and make an assertion.
    })

})