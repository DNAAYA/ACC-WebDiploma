// DOM manipulation
//Property
element.innerHTML =  //new html content	Change the inner HTML of an element
element.attribute = //new value	Change the attribute value of an HTML element
element.style.property = //new style	Change the style of an HTML element

//Method
document.getElementById(id).onclick = function(){code}	//Adding event handler code to an onclick event
document.querySelectorAll("p.intro"); // get an HTML element by class (.) or id (#)
document.getElementById("demo"); // get an HTML element by id
element.setAttribute(attribute, value)	//Change the attribute value of an HTML element
document.createElement(element)	//Create an HTML element
document.removeChild(element)	//Remove an HTML element
document.appendChild(element)	//Add an HTML element
document.replaceChild(new, old)	//Replace an HTML element


/////////////////////////////
//Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge  = function() {
    console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);




/////////////////////////////
//Object.create

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});



/////////////////////////////
//Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);

console.log('Ages',ages);
console.log('isFullAge',fullAges);




