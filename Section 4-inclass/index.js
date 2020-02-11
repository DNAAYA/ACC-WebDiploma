function calcuteAge (num) {
    return 2020-num
}


 function retirment1 (firstName, birthYear) {
    //console.log('retirment birthyear',birthYear);
    var age = calcuteAge(birthYear)
    var retirmentAge = 60 - age;

    if (retirmentAge > 0) {
        console.log(firstName + ' retires in ' + retirmentAge + ' years')
    } else {
        console.log('Already retired')
    }
} 

retirment1('sara', 1993)
retirment1('nada',1998);

function getName (firstName) {
    return firstName
}

function welcome (name) {
    var firstName = getName(name);
    console.log('Hello ' + firstName)
} 

welcome('sara')


var retirment2 = function(firstName, birthYear) {
    var age = calcuteAge(birthYear)
    var retirmentAge = 60 - age;

    if (retirmentAge > 0) {
        console.log(firstName + ' retires in ' + retirmentAge + ' years')
    } else {
        console.log('Already retired')
    }
}

retirment2('sara', 1993)

var names = ['sara','abdo','nehal'];
var years = new Array(1990,1997,2000);

console.log(names)
console.log(names[0])
console.log(names.length)

//array mutation
names[0] = 'nada'
console.log(names)

names[names.length] = 'boody'
names[names.length] = 'ghada'
console.log(names)

names.unshift(2000); //add first
names.push(1997); //add last
names.pop(); // remove last
names.shift(); // remove first
console.log(names.indexOf('nehal'))
console.log(names);


var abdo = {
    firstName: 'abd elrahman',
    lastName: 'mahmoud',
    age: 26,
    email: 'boody@gmail.com',
    pass: 123456,
    calcAge: function() {
        var birthYear =  2020 - this.age
        return birthYear
    }
}

console.log(abdo);
console.log(abdo.firstName);
console.log(abdo.calcAge());

