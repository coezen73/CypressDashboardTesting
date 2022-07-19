// Enums(enumarators):Sabit verilerin depolanmasi. Class mantiginda calisir-> enum Days { MONDAY, TUESDAY,WEDNESDAY ;}
// Different functions and methods are available with enums.

const browsers = {
    CHROME: 'chrome',
    FF: 'firefox',
    EDGE: 'Edge',
    SAFARI: 'safari'
}

let browsers1   = browsers.CHROME

function execute() {

    switch (browsers) {
        case browsers.CHROME:
            console.log("Execute Chrome")
            break;
        case browsers.FF:
            console.log("Execute Firefox")
            break;
        case browsers.EDGE:
            console.log("Execute Edge")
            break;
        case browsers.SAFARI:
            console.log("Execute safari")
            break;
    }
}
console.log(execute());


// *** We can upload many different third party dependencies from  "www.npmjs.com"