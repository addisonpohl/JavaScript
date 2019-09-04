//Conditonal and comparison operator syntax
function trueOrFalse(value) {
    if (value == true) {
        return "Here's some truth";
    }
    return "This is false";
}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10")) //Returns true since the strict equality operator wasn't used. In this instance the string is converted to a number and then compared.


function testNotEqual(a, b) {
    if (a !== b) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(5, "5")); //Returns not equal since the comparison operator is checking the value and type.


function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) { //And is called with &&
        return "Yes"
    }
    return "No"
}

function testLogicalOr(val) {
  if (val < 10 || val > 20 ) {
    return "Outside";
  }
  return "inside";
}

console.log(testLogicalAnd(45));
console.log(testLogicalOr(15));


//Ternary --- condition ? statment-if-true : statment-if-false;

function checkEqual(a, b) {
    //basic syntax example
    return a == b ? true : false;
}

console.log(checkEqual(2, 5));

//Using multiple conditonal ternary operators
function checkSign(num) {
    //nested operators
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(10));
