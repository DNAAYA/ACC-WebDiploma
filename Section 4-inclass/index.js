var name = 'Mahmoud';
console.log(name);
var number = 24;
console.log(number);
var number1 = 2;
var number2 = 2;
console.log(number1 == number2);    
console.log('my name is ' , name);  

var name, age, job;
name = 'Ahmed';
age = 22;
job = 'teacher';
console.log(name , age , job);
var noValue;

console.log(noValue);

var testNull = null; 
console.log(testNull);

console.log(typeof name); 
console.log(typeof number);
console.log ( typeof noValue);
console.log(typeof testNull);

var x = 2;
x += 10;
x -= 5;

 x++;
 x--;
 
 // 1 - and =  &&
 // 2 - or = ||
 // 3 - not = ! 

 var a = 5; 
 var b = 6; 
 console.log( a > 10 && b < 10);
 console.log( a > 10 || b <10);
 console.log( a == b);
 console.log(!(a == b));

 var firstName = 'abdo'; 
 var age = 19; 
 if (age < 19 ) {
     console.log(firstName, 'is too young')
 } 
  else if ( age === 19 ) {  
      console.log(firstName, 'young man')
  } 

    else { 
         console.log(firstName, 'is old enough')
    };


switch (true) {
    case age < 19: 
    console.log(firstName, 'is too young');
    break;
    case age === 19:
    console.log(firstName, 'young man');
    break;
    default: 
    console.log(firstName, 'is old enough');
};

var job = 'teacher';
switch (job) {
    case 'teacher': 
    console.log('teaches kids how to code.');
    break;
    case 'designer':
    console.log('designs beautiful websites.');
    break;
    default:
    console.log('do somthing else')
}

// ternary
age < 20 ? console.log("too young") : console.log("old");

if (age < 20) {
    console.log("too young");
}
else {
    console.log("old");
}


/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using 
the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher
 BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/


var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);


/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. 
In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), 
and print the winner to the console. Also include the average score in the output. (if statment)

GOOD LUCK 😀
*/



var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;

console.log(scoreJohn, scoreMike);

if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}
