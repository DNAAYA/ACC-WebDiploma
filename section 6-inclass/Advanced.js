// function constructor
var abdo = {
    name: 'abdo',
    yearOfBirth: 1994,
    job: 'teacher'
}

var User = function(name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

var mahmoud = new User('mahmoud', 1990, 'instructor')
var sara = new User('sara',1993,'developer')
User.prototype.lastName = 'mohamed'

console.log(mahmoud)
console.log(sara)
console.log(mahmoud.lastName)
console.log(sara.lastName)


//object.creat

var user = {
    calcAge: function() {
        console.log(2020-this.yearOfBirth)
    }
}

var boody = Object.create(user)
boody.name = 'boody';
boody.yearOfBirth = 1990;

boody.calcAge()

/* var boody = {
    name: 'boody',
    yearOfBirth: 1990,
    calcAge: function() {
        console.log(2020-this.yearOfBirth)
    }
} */



// passing function as an argument
var years = [1990,1965, 1937, 2005, 1998];

function calcAge(el) {
    return 2020 - el
}

function isFullAge (el) {
    return el >= 18
}

function arrayCalc(arr,fn) {
    var result =[];

    for (var i = 0;i < arr.length; i++) {
        result.push(fn(arr[i]))
    }

    return result;
}

var ages = arrayCalc(years,calcAge)
var fullAges = arrayCalc(ages, isFullAge)

console.log(ages)
console.log(fullAges)