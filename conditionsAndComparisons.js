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

console.log(testLogicalAnd(45))
