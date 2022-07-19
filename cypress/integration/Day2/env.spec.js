/*
Usually we have different "environments".json in fixtures file.
-> In each of them, we have necesseray credentials like; username, password, quicklaunch.. etc. and url.
Every environment has different credentials with different url.
If we want to work with them,  we create a file named; 'env.spec.js' in the 'Day2 folder' (as an example..) 
Inside these folder:
*/

var data = require('../../fixtures/xyvz.json') 
// requires-> a path: ('integration->cypress->fixtures->'environment.json') 
// than i create a small project by using if -else statements:

if (url.include('test')) {         // <- if 'url' will use to run tests,
    cy.fixture('staging.json').then((data) => {   // <- provide this data's credentials!
        //Credentials:
        data.username()  // -> Admin2
        data.password()  // -> Test2
        data.Url()       // -> staging.google.com    etc..

    })
    // or else;
} else if (url.include('uat')) {
    cy.fixture('uat.json').then((data) => {  
      // Credentials:

    })
    // or else;              
} else if (url.include('prod')) {
    cy.fixture('prod.json').then((data) => {  

    })
}