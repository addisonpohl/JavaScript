var exArray = ["addison", 24];
var nestArray = [["John Smith", 25], ["Kate Johnson", 40]];// Nested Array

//Accessing Arrays by Index
console.log(exArray[0]);

//Array Index Can Be Used to Modify
exArray[1] = 23;
console.log(exArray);

//Accessing Nested Arrays
console.log(nestArray[0][0]); //The first index determines which array, the second determines the value within the array
console.log(nestArray[1][0])

//Appending Data to an Array
exArray.push(["JavaScript", "Ruby"]) // Push appends and additonalarray
console.log(exArray)

//Manipulating Arrays
//----------------------------------------------------------------------------------------------
//*pop: Removing index *
var numArray = [1, 2, 3];
var popFromNumArray = numArray.pop(); // Pop renives from an array. In this instance the last index is removed and stored indo the  removedFromNumArray variable
console.log(numArray);
console.log(popFromNumArray);

//*shift: Removes the first element of the array
var nameArray = ["Alex", "Joy", "Cassie"];
var shiftedArray = nameArray.shift();
console.log(nameArray);
console.log(shiftedArray);

//*unshift: Adds and element to the first index of an array.
nameArray.unshift("Jack");
console.log(nameArray);
