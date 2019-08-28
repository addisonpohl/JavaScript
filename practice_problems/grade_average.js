var grades = [100, 25.8, 90, 98.8, 76, 87, 90]

function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
    var total = 0;
    for(var i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    var avg = total / marks.length;
    return Math.floor(avg);
}

console.log(getAverage(grades));
