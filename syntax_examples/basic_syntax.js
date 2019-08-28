//This file is meant to be used a basic syntax reference sheet.

// in-line comment
/*This is a multi-line-
comment*/

//Declaring a variable

console.log("Hello from Javascript");

var myName = "Addison"; //var can be used through out the entire program
let ourName = "company name";//let is used within the scope of its instance
const pi = 3.14;//const is used for for declaring an inmutable variable
myName = "John"; //A variable can be reassigned after it has been declared (excluding const)

var myVar = 23;
myVar ++; //increments variable by the value of 1
console.log(myVar);
myVar --; //decrements variable by value of 1
console.log(myVar);
myVar += 10;//compund assignment
console.log(myVar);

//String info

var myStr = "I am a \"double quoted string\""; //Escape character '\' is used when for double quotes and other text formatting
var myStrLen = myStr.length //Collects length of a string
console.log(myStr);
console.log("myStr Length: " + myStrLen);
console.log(myName);
var firstLetter = myName[0];
console.log(firstLetter);
//This file is meant to be used a basic syntax reference sheet.

// in-line comment
/*This is a multi-line-
comment*/

//Declaring a variable

console.log("Hello from Javascript");

var myName = "Addison"; //var can be used through out the entire program
let ourName = "company name";//let is used within the scope of its instance
const pi = 3.14;//const is used for for declaring an inmutable variable
myName = "John"; //A variable can be reassigned after it has been declared (excluding const)

var myVar = 23;
myVar ++; //increments variable by the value of 1
console.log(myVar);
myVar --; //decrements variable by value of 1
console.log(myVar);
myVar += 10;//compund assignment
console.log(myVar);

//String info

var myStr = "I am a \"double quoted string\""; //Escape character '\' is used when for double quotes and other text formatting
var myStrLen = myStr.length //Collects length of a string
console.log(myStr);
console.log("myStr Length: " + myStrLen);
console.log(myName);
var firstLetter = myName[0];
console.log(firstLetter);
myStr = "I'm a \"double quoted string\"";//Strings are inmutable meaning individual characters cannot be changed. A new assignment ahs to be made if a string needs to be edited
var firstName = "Paul";
var thirdToLastCharacter = firstName[firstName.length - 3]; //To retreive the last character you would subtract the length mine the ammount of characters to go back to
console.log(thirdToLastCharacter);
