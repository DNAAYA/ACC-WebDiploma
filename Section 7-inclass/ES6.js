/* // variables 

var a = 'john';
const b = 'miller';
let c = 'mary';

//console.log(a,b,c)


// Strings

let fName = 'john';
let lName = 'miller';
const year = 1997;

function calcAge(year) {
    return 2020-year;
};

// es5 
console.log(fName + ' ' + lName + ' ' + calcAge(year))

//es6 
console.log(`this is ${fName} ${lName}, ${calcAge(year)} years old`)
console.log(`${fName} `.repeat(5))

// Arrow function 
const years = [1990, 1965, 1982, 1937];

var ages1 = years.map((el)=> {
    return 2020-el
})
var ages2 = years.forEach(function (el) {
    var ages =  2020-el
    console.log(ages)
})

console.log(ages1)


// Destructuring 
var abdo = {
    name: 'abdo',
    age: 26
}

//es5
var name = abdo.name

//es6
var {name: name1 , age: age1} = abdo
console.log(name1,age1)

var sara = ['sara',27]
var [name2, age2] = sara
console.log(name2,age2)

// Arrays
const boxes = document.querySelectorAll('.box');
//console.log(boxes)

//es5
var array5 = Array.prototype.slice.call(boxes);
//console.log(array5)
array5.forEach(function(el) {
    el.style.backgroundColor = 'red';
})

//es6
var array6 = Array.from(boxes);
array6.forEach( (el)=> {
    el.style.backgroundColor = 'dodgerblue';
})

for (let i of array6) {
    i.textContent = 'i changed to blue'
}

var char =  'menna'
var array7 = Array.from(char);
console.log(array7)


// Spread operator
function add (a,b,c,d) {
    return a+b+c+d
}

console.log(add(1,5,9,7))

//es5
var nums = [1,5,9,7]
var sum1 = add.apply(null, nums)
console.log(sum1)

//es6 
var sum2 = add(...nums)
console.log(sum2)

// Default parameter

//es5 
function User1 (firstName, yearOfBirth, lastName, nationality){

    lastName === undefined ? lastName = 'mohamed' : lastName = lastName
    nationality === undefined ? nationality = 'egyptian' : nationality = nationality

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var abdo1 = new User1('abdo', 1993, 'mohamed', 'egyptian')

//es6 
function User2 (firstName = 'abdo', yearOfBirth = 1993, lastName = 'mohamed', nationality = 'egyptian'){

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
var abdo2 = new User2()
console.log(abdo2)


// Maps
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?')
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES7');
question.set(4,'ES8');
question.set('correct', 1);
question.set(true, 'Correct Answer');
question.set(false, 'Wrong Answer')


//question.clear()
//question.delete(4)
//console.log(question.get(1))
//console.log(question.has(3))
//console.log(question)

//question.forEach((value,key)=> console.log(`this is the key ${key}, and this is its value ${value}`))

var answer = parseInt(prompt('Write your answer'))
console.log(question.get(answer === question.get('correct'))) */

//Classes

/* class Person {
    constructor(name , yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    static calcAge(yearOfBirth) {
        var age = new Date().getFullYear() - yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hello World')
    }
}

var abdo = new Person('abdo',1993,'teacher');
console.log(abdo)
Person.calcAge(abdo.yearOfBirth)
Person.greeting()

// subClass
class Athlete extends Person {
    constructor(name,yearOfBirth,job,medals) {
        super(name,yearOfBirth,job)
        this.medals = medals;
    }
}

var athlete = new Athlete('abdo',1993,'swimmer',5)
console.log(athlete)
Athlete.calcAge(1990) */

//Async Simulation

var second = () => {
    setTimeout(()=>{
        console.log('Async')
    },3000)
}

var first = ()=> {
    console.log('first line')
    second()
    console.log('third line')
}

//first()

function getRecipe(){
    setTimeout(()=>{
        var recipeID = [1,2,3,4];
        console.log(recipeID);

        setTimeout(id => {
            var recipe ={tilte: 'pizza', publisher: 'menna'};
            console.log(`${id}: ${recipe.tilte}`)

            setTimeout(publisher => {
                console.log(publisher)
            },2000,recipe.publisher)
        },2000,recipeID[2])
    },2000)
}

getRecipe();