var names = ['sara','abdo','nehal','yasser',1999,'nada']

for (var i = 0; i < names.length; i++) {
    if (typeof names[i] !== 'string' ) continue;
    console.log(names[i]);

}

for (var i = 0; i < names.length; i++) {
    if (typeof names[i] !== 'string' ) break;
    console.log(names[i]);

}

/* console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]); */

var n = 0;
while(n < names.length) {
    console.log(names[n]);
    n++;
}



// make a function to take an array of names as an argument 
// and loop through the array and console log every name 
