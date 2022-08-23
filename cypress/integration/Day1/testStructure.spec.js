// .spec means => this time, we are going to run the test in cypress test runner.

/// <reference types="cypress" />  

// Describe method : It will be our test header
// We can say: describe.skip() -> it will skip testing this one
//         or: describe.only() -> it will run only this test case.. => Both functions in test steps as well:  it.skip() /it.only()

describe('Dev-864', () => {         //<- We have created our 'teststructure.spec' file in cypress test runner page! Represents Tests


    it('#AC1 Testing', () => {                    // <-represent the  test cases in test runner


    })

    it('#AC2 Testing', () => {                     //<- represent the second test in test runner


    })
    it('#AC3 Testing', () => {                      // represent the third test in test runner


    })

})

describe('Dev-865', () => {         // <- We have created our second test Case
    // We need to implement our 'before&after methods' every time inside the 'describe':
    before('Before Method', () => {

    })

    after('After Method', () => {

    })

    beforeEach('Before Each Method', () => {
    })

    afterEach('After Each Method', () => {

    })
    it('#AC1 Testing', () => {


    })

    it('#AC2 Testing', () => {


    })

})                  
