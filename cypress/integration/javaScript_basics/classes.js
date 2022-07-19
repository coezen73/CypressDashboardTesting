// Create a Car class:
// this car should have 'Name, model and year:
class Car {
    constructor(carName, model, year) {       // At each class we need a constructor
        this.carName = carName;              // I pointed with 'this.' the exact element that we use 
        this.model = model;
        this.year = year;
    }
    // Create a function to get the car age:
    carAge() {
        let date = new Date();                          // I create a 'Date' object which comes with JS. 
        return date.getFullYear() - this.year           // Every function in JS, supposed to return something..
    }                                                   // ->  This will give us the age of the car        
}
// Provide the information about the car as it is mentioned at the beginning:
var myCar = new Car("BMW", "3.20", "2008");
console.log("Car age is " + myCar.carAge());          // -> Do not forget to priovide the () for carAge function!

//------------------------------------------------------------------------------------

class motorBike {
    constructor(engine, year, model) {
        this.engine = engine;
        this.year = year;
        this.model = model;
    }
    Age() {

        let date = new Date;
        return date.getFullYear() - this.year;
    }
}
var myMotorbike = new motorBike('700cc', '2004', 'YAMAHA');
console.log("My motorbike is " + myMotorbike.Age() + " years old.");
console.log(myMotorbike);