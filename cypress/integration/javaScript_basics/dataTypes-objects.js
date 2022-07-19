
// in JS, we don't need to use ';' (semi-column) but we can use in case we might need to..

var name = "Ibrahim"
var age = 28
var name_object = { firstName: "Ibrahim", lastName: "Altay" }
var truth = true
var sheets = ["HTML", "CSS"]
var a = null

// when we hover-over the variables, JS shows us automatically the type of the variable

// Creating an Object:

var student = {
    firstName: "Ibrahim",
    lastName: "Altay",
    age: 28,
    heighjt: 189,

    fullName: function () {  // 'fullName' is created as a function and it should return us the full name.
        return this.firstName + " " + this.lastName
    }
}
// for instance;
const ageValue = student.age  // go inside the students and find the age

console.log(ageValue);
console.log(student.fullName());// to call the fullname function, we need to provide the '()' 

// to save the file: strg(ctrl)+s
