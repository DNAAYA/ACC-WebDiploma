// IIFE
/* function game() {
    var score = Math.random() * 10;
    console.log(score );
}
game();


(function () {
    var score = Math.random() * 10;
    console.log(score );
})();

//console.log(score);


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(goodLuck + score)
})(5)
 */
// call, apply and bind

var sara = {
    name: 'sara',
    age: 26,
    job: 'developer',
    presentation: function(style, time) {
        if (style === 'formal') {
            console.log('Good ' + time + ', Ladies and gentlemen! I\'m ' 
            + this.name + ' a ' + this.job + ' and ' + this.age + ' years old')
        } else if ( style === 'friendly') {
            console.log('Hey I\'m '
            + this.name + ' a ' + this.job + ' and ' + this.age + ' years old, have a nice ' + time)
        }
    }
}

var abdo = {
    name: 'abdo',
    age: 26,
    job: 'designer'
}

sara.presentation('formal','morning')

sara.presentation.call(abdo, 'formal','morning')
sara.presentation.apply(abdo, ['formal','afternonn'])

var friendly = sara.presentation.bind(abdo, 'friendly' , 'evening')
friendly()