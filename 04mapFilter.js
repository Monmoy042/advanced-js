// Map and Filter and Find in JUS
const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
// 	let element = numbers[i];
// 	let square = element * element;
// 	output.push(square);
// }
// console.log(output);

// Map in JS
// function square(element) {
// 	return element * element;
// }

// Map can take three parameter -> element, index and array
numbers.map(function square(element, index, array) {
	// console.log(element, index, array);
});

const result1 = numbers.map(function square(element) {
	// console.log(element);
	return element * element;
});
console.log('Result1: ' + result1);

const result2 = numbers.map((x) => x * x);
console.log('Result2: ' + result2);

// Filter in JS
// Filter pass an array for us
const bigger = numbers.filter((x) => x > 5);
console.log('Bigger: ' + bigger);

const even = numbers.filter((x) => x % 2 == 0);
console.log('Even: ' + even);

// Find in JS
// Find will pass first match in our code
const isThere = numbers.find((x) => x > 5);
console.log(isThere);
