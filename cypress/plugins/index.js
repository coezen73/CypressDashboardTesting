
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}


























//** 
// Code to handle the Sessions in cypress
//Keep the Session alive when you jump to another test
// afterEach(()=>{

//   let str = [];

//   cy.getCookies().then((cook) => {
//     cy.log(cook);

//     for(let i = 0; i < cook.length; i++){

//       if(cook.length > 0 && i == 0){
//         str[i] = cook<[i].name;
//         Cypress.Cookies.preserveOnce(str[i]);
//       }else if(cook.length > i  && i > 1){
//         str[i] = cook[i].name;
//         Cypress.Cookies.preserveOnce(str[i]);
//       }
//     }
//   })

// })
