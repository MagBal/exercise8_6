// scripts.js

alert('Calculation of the result of operation: (a * a) - (2 * a * b) + (b * b)');

var a = parseInt(prompt("Enter number a : ")),
	b = parseInt(prompt("Enter number b : ")),
	value = (a * a) - (2 * a * b) + (b * b);
alert('The result of operation: (' + a + '*' + a + ') - (2 *' + a + '*' + b + ') + (' + b + '*' + b + ') is equal to: ' + value + '.');
console.log('The result of operation: (' + a + '*' + a + ') - (2 *' + a + '*' + b + ') + (' + b + '*' + b + ') is equal to: ' + value + '.');

if (value > 0) {
	console.log('Positive result.');
} else if (value < 0) {
	console.log('Negative result.');
} else if (value == 0) {
	console.log('The result is equal to 0.');
} else {
	console.log('Wrong data!');
}

var value = value == 0 ? ('Value is equal to 0.') : ('Value is diffrent of 0.');
console.log(value);