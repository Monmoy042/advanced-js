// Split array using slice
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5);
console.log(part);
console.log(nums);
//slice cannot change the original array

// splice in Array
const removed = nums.splice(2, 4, 11, 22, 33, 44, 55, 66);
console.log(removed);
console.log(nums);
// splice will change the original array
// splice can add some elements in array

// join in JS
const together = nums.join(',');
console.log(together);
