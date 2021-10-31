// Apply Map, Filter and Find in JS
const students = [
	{ id: 21, name: 'Omor Sani' },
	{ id: 31, name: 'Mannaa' },
	{ id: 41, name: 'Moyuri' },
	{ id: 71, name: 'Dipjol' },
];
// const names = [];
// for (let i = 0; i < students.length; i++) {
// 	let element = students[i].name;
//     names.push(element);
// }
// console.log(names);

const names = students.map((element) => element.name);
const ids = students.map((s) => s.id);
console.log(names, ids);

// Filter in Array
const biggerStudents = students.filter((s) => s.id > 40);
console.log(biggerStudents);

// Find in Array
const biggerStudents2 = students.find((s) => s.id > 40);
console.log(biggerStudents2);
