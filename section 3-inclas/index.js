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