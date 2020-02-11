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




/////////////////////////////
//Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('jane');
teacherQuestion('Mark');
designerQuestion('Mike');

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

retirement(66)(1990);


function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');



/////////////////////////////
//IIFE

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);



/////////////////////////////
//Call

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon'); 

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly','morning');

johnFriendly();

var emilyFormal = john.presentation.bind(emily, 'formal','afternoon');
emilyFormal();


