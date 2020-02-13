/*  
=========> =======> #1: variable  with (var, let, const)
*/
// ES5 >>

//Example 1:
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);
// expected Result: 'Jane Miller' 

//Example 2:
function variableCheckES5(check) {
    
    if (check) {
        console.log(firstName); // expected Result: undefined

        var firstName = 'sara';
        // console.log('first name', firstName);
        // expected Result: first name sara
    }
    
    console.log('first name out of scope but in the same function', firstName);
    // expected Result: first name sara
}

variableCheckES5(true);


//Example 3: 
var i = 23;

for (var i = 0; i < 5; i++) {
    // console.log(i);
}

console.log(i);
// expected Result: 0 1 2 3 4 5 

/* ================================================================ */

// ES6 
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Sara Soliman';
console.log(name6);
// expected Result: Error

//Example 2:
function variableCheckES6(check) {
    
    let firstName;    
    if (check) {
        firstName = 'sara';
        console.log('first name ES6:', firstName);
    // expected Result: first name sara
    }
    
    console.log('first name out of scope but in the same function  ES6:', firstName);
    // expected Result: first name sara
}

variableCheckES6(true);

//Example 3: 
let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
// expected Result: 0 1 2 3 4 5 

/* ================================================================ */

/*
=========> =======> #2: Blocks And IIFEs
IIFE >>> Immediately-Invoked Function Expression    بتشغل تلقائي 
*/

// ES5
(function() {
    var c = 3;
})();
    console.log (c);
// Es6 
{
    const a = 1;
    let b = 2;
    var c = 3;
}

console.log(a + b); // expected Result: Error becouse a and b outside the block
console.log(c); // expected Result: 3 becouse var can use outside the block

/*
=========> =======> #3: Arrow Function
*/
// ES5

var multiplyES5 = function(x, y) {
    return x * y;
  };

  
  // Example #2:
  var phraseSplitterEs5 = function phraseSplitter(phrase) {
    return phrase.split(' ');
  };
  console.log(phraseSplitterEs5("ES5 Awesomeness"));
  
// ES6

const multiplyES6 = (x, y) => { return x * y };
// const multiplyES6 = (x, y) => x * y ; in ES6 no neeed to write 'return' in this way we can return automatecly 


// Example #2 :
const phraseSplitterEs6 = phrase => phrase.split(" ");

console.log(phraseSplitterEs6("ES6 Awesomeness"));  // ["ES6", "Awesomeness"]

/*
=========> =======> #4: (This) Keyword
this >> ptshof el scope ali aplaha 
ES5> this يكون بيساوي variable لازم اعرف 
NOTE: plash ashr7ha ela eza 7d s2l 3leha f ES5

Es5This = function(string) {
  var self = this;
  return new Promise(function(resolve, reject) {
    http.get(self.uri + resource, function(data) {
      resolve(data);
    });
  });
};
*/


// ES6 >> 
Es6This = function(resource) {
    return new Promise((resolve, reject) => {
      http.get(this.uri + resource, function(data) {
        resolve(data);
      });
    });
  };

  /*
=========> =======> #5: Destructuring */
// ES5:
var ssoliman = ['Sara', 27];
var name = ssoliman[0];
var age = ssoliman[1];
console.log('name :', name)

// ES6: 
// Example #1:
const [name, age] = ['Sara', 27];
console.log(name);
console.log(age);

// Example #2:
const obj = {
    firstName: 'Sara',
    lastName: 'Soliman'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

//Example #3:
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

  /*
=========> =======> #6: Arrays 
Note: connected with HTML Page */
const boxes = document.querySelectorAll('.box');

// ES5: 
// Example #1:
var boxesArr5 = Array.prototype.slice.call(boxes);
console.log('boxes array:', boxesArr5);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

for(var i = 0; i < boxesArr5.length; i++) {
    
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }
    
    boxesArr5[i].textContent = 'I changed to blue!';
    
}

// Example #2:
    var ages = [12, 17, 8, 21, 14, 11];

    var full = ages.map(function(cur) {
        return cur >= 18;
    });
    console.log(full);
    // expected Result: [false, false, false, true, false, false]
    console.log(full.indexOf(true));
    // expected Result: 3
    console.log(ages[full.indexOf(true)]);
    // expected Result: 21


//ES6:
// Example #1:
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}
// Example #3:
//ES6
var ages = [12, 17, 8, 21, 14, 11];
console.log(ages.findIndex(cur => cur >= 18));
 // expected Result: 3 >>> htrg3li el index
console.log(ages.find(cur => cur >= 18));
// expected Result: 3 >>> htrg3li el element nfso

  /*
=========> =======> #7: Spread operator */

function addFourAges (a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...age5);
console.log(sum3);

  /*
=========> =======> #8: Rest parameters */
//ES5
function isFullAge5() {
  console.log(arguments);
  // expected Result: Arguments(5) /// all arguments which taken
  var argsArr = Array.prototype.slice.call(arguments);
  console.log(argsArr);
  // expected Result: Array(5) /// convert argument to array
  argsArr.forEach(function(cur) {
      console.log((2016 - cur) >= 18);
  })
}


//ES6
function isFullAge6(...years) {
  console.log('years es6', years)
// expected Result: Array(5) /// ...years >> convert arguments to array direct

  years.forEach(cur => console.log( (2016 - cur) >= 18));
}
isFullAge6(1990, 1999, 1965, 2016, 1987);

/*
=========> =======> #8: Maps */
const map = new Map()

map.set(5, "Hello")
map.set("5", "World")
map.set("sara", "software developer")
// hna p3ml generate l new map fa p7ot feha ali ana 3yzo ps lazm ykon f key w value 
map.size // 3
// da size elmap
console.log(map);
//expected Result:  Map { 5 => 'Hello', '5' => 'World', 'John' => 'The revelator' }

map.get(5) // Hello
map.has('5') // true
map.get('Random') // undefined
map.has('sara') // true

map.delete('5')
map.size // 2

map.clear()
map.size // 0
// Map {}

// Example 2: map vs for and foreach
// hna ana p3ml ay method gwa el array mn 3'er mktp for aw foreach 
// hn3ml function pta5od array of strings w ptrg3lna array tania ps awl 7rf mn kol string ykon cabital
let stringArray = ['sara','mahmoud', 'abd elrazik']
function convertString(strArr) {
  return  strArr.map(result => result.charAt(0).toUpperCase() + result.slice(1).toLocaleLowerCase())
}

console.log(convertString(stringArray))
/*
=========> =======> #9: Classes */
//ES5 >> Function constructor in ES5 ..
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}
var sara = new Person5('Sara', 1993, 'software developer');
sara.calculateAge();


//ES6
class Person6 {
  // all classes must have constructor
  constructor (name, yearOfBirth, job) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
      this.job = job;
  }
  
  calculateAge() {
      var age = new Date().getFullYear - this.yearOfBirth;
      console.log(age);
  }
  // instant : lazm a3ml create object mn el class 3shan a2dr ast5dm el method nfsaha 
  // static :  msh shart a3ml object mn el class mmkn ast5dmaha mopashrtn

  static greeting() {
      console.log('Hey there!');
  }

}

const saraES6 = new Person6('Sara', 1993, 'software developer');

Person6.greeting();
saraES6.calculateAge();





















