// ES5
var ages = [2,8,9,12,20];

var check = ages.map(function(res) {
   // console.log("map result", res)
    return res >= 5
})
console.log(check);


//ES6

var ages = [2,8,9,12,20];
var check = ages.map(res => res >= 5);


console.log(check)











