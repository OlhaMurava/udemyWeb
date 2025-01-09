/**
 * ==============================
 *         tasks.js
 * ==============================
 * 
 * This file contains 5 JavaScript tasks focusing on array operations.
 * Each task is described in English, followed by a short example or hint.
 */

// /**
//  * TASK 1: SUM OF ARRAY ELEMENTS
//  *
//  * 1. Create an array of numbers (e.g., [1, 2, 3, 4, 5]).
//  * 2. Find the sum of all elements in the array (you can use a loop or the reduce() method).
//  * 3. Print the result to the console.
//  *
//  * Example:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);


// /**
//  * TASK 2: FILTERING ELEMENTS
//  *
//  * 1. Create an array of mixed data types (numbers, strings, booleans, etc.).
//  * 2. Use the filter() method to keep only those elements that are numbers.
//  * 3. Print the filtered array to the console.
//  *
//  * Example:
const mixed = [42, 'hello', true, 100, 'world', false, 7];
function filter() {
  const numbers = mixed.filter(element => typeof element === "number");
  console.log(numbers);
}
filter()


// /**
//  * TASK 3: UNIQUE VALUES
//  *
//  * 1. Create an array with duplicate values (e.g., [1, 2, 2, 3, 4, 4, 4, 5]).
//  * 2. Write code to return a new array with no duplicates.
//  * 3. Print the result to the console.
//  *
//  * Hint: You can use filter(), reduce(), a Set, or other approaches.
//  *
//  * Example:
const nums = [1, 2, 2, 3, 4, 4, 4, 5];
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const uniqueArray = removeDuplicates(nums);
console.log(uniqueArray); 


// /**
//  * TASK 4: MERGING AND SORTING ARRAYS
//  *
//  * 1. Create two arrays of numbers (e.g., arr1 = [5, 2, 8] and arr2 = [10, 3, 7, 1]).
//  * 2. Merge them into a single array (using the spread operator ... or the concat() method).
//  * 3. Sort the merged array in ascending order.
//  * 4. Print the result to the console.
//  *
//  * Example:
const arr1 = [5, 2, 8];
const arr2 = [10, 3, 7, 1];
const arr3 = arr1.concat(arr2);
arr3.sort((a, b) => a - b);
console.log(arr3);

// /**
//  * TASK 5: FLATTENING NESTED ARRAYS
//  *
//  * 1. Create an array containing nested arrays (e.g., [1, [2, 3], [4, [5, 6]], 7]).
//  * 2. Write code to "flatten" this array into a one-dimensional array.
//  *    - You can do this recursively or use the built-in flat() method (if available).
//  * 3. Print the flattened array to the console.
//  *
//  * Example:
const nestedArr = [1, [2, 3], [4, [5, 6]], 7];
console.log(nestedArr.flat(2));
