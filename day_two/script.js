var x, y, z; //Declares x,y,z variables
x = 5;
y = 6;
z = x + y;

document.getElementById("demo").innerHTML = "The value of z is " + z + ".";


//This is a function which is refernced by an HTML button. It will run once the button is clicked.
function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello";
  document.getElementById("demo2").innerHTML = "How are you?";
}

//Function Practice
function example(p1, p2) {
  return p1 * p2; //This returns the product of p1 * p2
}

//Convert Fahrenheit to Celsius
function toCelsius(f) {
  return (5/9) * (f-32);
}
var x = toCelsius(77);
var text = "the tempature is " + x = " Celsius.";
document.getElementById("demo3").innerHTML = text
