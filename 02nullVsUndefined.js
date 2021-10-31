// Undefined VS Null
let num1;
console.log(num1);

// Undefined in function
function add(num1, num2 = 10) {
	console.log(num1 + num2);
	// return num1 + num2;
	// return num1
	console.log(num2);
}
const result = add(10);
console.log(result);

// Undefined in Object
const premik = { name: 'Smart Dude', phone: 45827 };
console.log(premik.gf);

// Set value as undefined
let fun = undefined;
// fun = 10;
console.log(fun);

// Undefined in array
let ages = [2, 5, 9];
console.log(ages[11]);
