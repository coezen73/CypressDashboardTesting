
// // we added the 'list of States(USA) in text'  as a 'json file' inside our 'fixtures'.
// // To reach and get it, I need to create a 'data variable' by using a 'path' with 'require()'
 var data = require('../../fixtures/states.json')

 describe('dropdown handling',()=>{


     it('First Test',()=>{
         cy.visit('http://practice.cybertekschool.com/dropdown')

// // '>' arrow will help me to go from 'id=state to the 'options' below (father to child element) 
// //on dropdown page during the inspection of the locators->
// // I also create an each loop to get every elements  inside the dropdown list:     
         cy.get('[id="state"] > option').each(($el,index)=>{

// // Till here, I set all info up, to be able to start my testing
// // Now, I want to get the text value of these elements:
             const text = $el.text() //I create, defined and assign the value to 'text' variable 
// // and I assert them one by one with .expect() by checking with .contain() in the data.states[index] array
             expect(text).to.contain(data.states[index])
// //--------------------------------------------------------------------------------
// // selecting and verfying in one line:
         cy.get('[id="state"]').select($el.text()).should('be.visible')
         })
     })
 })

