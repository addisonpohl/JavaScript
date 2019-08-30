//Itterating with While Loops

var myArray = [];



//while Loop: 

var i = 0;

while(i < 5) {

//Add 1 - 5 to myArray by using a while loop.

    i ++;  

    myArray.push(i)

    

}

console.log(myArray);

var greeting = "Hello"

// 1. Declare a variable to itterate, 2. Set the condition for when the loop should end using the 
vaariable 3. Increment the variable. 

for (var i = 0; i < greeting.length; i++) {

    console.log(greeting[i]);

}



//Create an an array 1-10 with only even numbers.

var even = [];

for (i = 2; i <= 10; i += 2) {

    even.push(i);

}

console.log(even);



//Create an array with 1-10 for only odd numbers

var odd = [];

for (i = 1; i < 10; i += 2) {

    odd.push(i);

}

console.log(odd);



//Counting backward with for loops

var countDown = [];

for (i = 10; i > 0; i -= 2) { //Set decrement - 2

    countDown.push(i);

}

console.log(countDown);



//Itterating through an array with a for loop

var word = "Here is the word: "

var sampleArry = ["a", "b", "c", "d"];

for (i = 0; i < sampleArry.length; i++) {

    word += sampleArry[i];

}

console.log(word);



var numbers = [5, 10, 15, 20];

var total = 0;

for (i = 0; i < numbers.length; i ++) { 

    total += numbers[i];

}

console.log(total);



 //Nested for loops

function multiplyAll(arr) {

    var product = 1;  
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
 }

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);



// Do While Loops

var doArry = [];

var i = 10;



do { //The instructions will be run first, then the condition is checked

    doArry.push(i);

    i++;

} while (i < 5)

console.log(i, doArry);