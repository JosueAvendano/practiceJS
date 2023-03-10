/***********************************************************************************************************Variable Concepts*****************************************************************************************/
/* var */
//Can be re-declared: this can create some problems, because it has a global scope, so if you re-declare a variable within a function it can also affect another variable outside of said function
//These type of variables can be hoisted: you can use the variable before it is declared
/* let */
//Can't be re-declared, unless in another block
//Must be declares before used
//Have block scope: if you use let inside a function, it can only be used in said function
/* const */
//Can't be re-declared
//Can't be reassigned:
//const PI = 3.141592653589793;
//PI = 3.14; //This will give an error
//console.log(PI);
//PI = PI + 10; //This will also give an error
//console.log(PI);
//Have block scope: if you use let inside a function, it can only be used in said function
//Must be assigned a value when they are declared
//correct
//const PI = 3.141592653589793;
//incorrect
//const PI;
//PI = 3.141592653589793;
//When to use const?
//It DOES NOT define a constant value. It defines a constant REFERENCE to a value. Following this, YOU CAN NOT:
//Reassign a constant value
//-A new array
//Reassign a constant array
const cars = ["Saab", "Volvo", "BMW"];
//cars = ["Toyota","Volvo","Audi"]; //ERROR   
//-A new object
//Reassign a constant object
const autos = {type: 'Fiat', model: '500', color: 'white'};
//autos = {type: 'Volvo', model: 'EX60', color: 'red'}; //ERROR
//But You CAN:            
//Change the elements of a constant array. For example:
//You can create a constant array
const carros = ["Saab", "Volvo", "BMW"];
//You can change an element
carros[0] = "Toyota";
//You can add an element
        carros.push("Audi");
        //Change de properties of constant objects. For example:
        //You can create a const object
        const car = {type: 'Fiat', model: '500', color: 'white'};
        //You can change a property
        car.color = 'red';
        //You can add a property
        car.owner = 'Johnson'
        //Other examples of Objects:
        const person = {
            firstName: 'John',
            lastName: 'Doe',
            id: 1234,
            fullName: function(){
                return this.firstName + " " + this.lastName;
            }
        }
        console.log(person.fullName())
        //-A new function: a block of code designed to perform a particular task and it is executed when "something" invokes it. For example:
        function myFunction(p1, p2) {
            return console.log(p1 * p2); 
        }
        myFunction(2,4);
        //-A new RegExp
        
        
        
/*******************************************************************************************************Data Types****************************************************************************************************/
//Strings: for storing and manipulating text. A JS string is zero or more characters written inside quotes.
let text = "Lorem ipsum...";
//You can use single or double quotes
let carName1 = "Volvo XC60";
let carName2 = 'Volvo Xc60';
//You can use quotes inside a string, as long as they don't match the quotes surrounding the string
let answer1 = "Its alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
//String length: to find the length of a string, use the built*in length property:
let anotherText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = anotherText.length;
//Escape character: to not m