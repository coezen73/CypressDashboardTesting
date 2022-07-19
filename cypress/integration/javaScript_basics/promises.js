// we are using the promises, because especially in UI, we often use If-else statements.
// And also, Cypress has 4 sec. wait time as a default, but; mostly we can create additional waits by using them too.

function getNumber(currency) {

    return new Promise((resolve, reject) => {   // we use resolve and reject for promises:

        if (typeof currency != "number") {
            reject(new Error("Curreny is not a number"))  // -> If given is not a number, throw as an Error
        } else {
            resolve(currency)  // -> If it is,  then  show us..
        }
    })
}
getNumber(1000).then((val) => {  // '.then' keyword will help us to place the amount into the (val)
    console.log('value : ', val)
})
