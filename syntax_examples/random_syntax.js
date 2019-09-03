//Generate random fractions
function randomFunction() {
  return Math.random();
}
console.log(randomFunction())

//Generate random whole numbers
var randomNumber = Math.floor(Math.random() * 100); //Math.floor is used to round down to the nearest whole number. This example creates a random whole number between 0 and 99.
console.log(randomNumber);

//Generating a random whole number within a range
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randR = randomRange(1, 10);
console.log(randR);