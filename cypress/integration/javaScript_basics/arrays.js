
let tools = ['selenium', 'cypress', 'wdio', 'uft', 'protractor']  // also possible to use 'var'

// Convert array to a string:
const string = tools.toString();   // const = constructor
console.log(string);

// Change komas(,) with stars(*) in between each element in an array:
const join = tools.join(' * ')
console.log(join);

// Delete the last element and show the rest in array:                  
const pop = tools.pop();
console.log(tools);       // I can call with the old name too..

// Add new element at the end of the array
const push = tools.push('webshare')
console.log(push);        // Shows the numbers of the elements in the array
console.log(tools);

// Shift to the left and take 'selenium' out
const shift = tools.shift()
console.log(tools);

 // Unshift selenium :
 const unshift = tools.unshift("selenium")
 console.log(tools);

// Sort the elements in order: 
const sort = tools.sort();
console.log(sort);

// Reverse the order from bottom to top: 
const reverse = tools.reverse();
console.log(reverse);

// Create for-each loop. / (value) gets the entire array elements in it
tools.forEach((value) => {
    if (value === "cypress") {
        console.log("Cypress is trending");
    } else {
        console.log("There is no such an element");
    }
})