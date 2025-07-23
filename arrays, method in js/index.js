// array-methods.js

let arr = [1, 2, 3, 4, 5];

console.log("Original Array:", arr);

// 1. push() - Add to end
arr.push(6);
console.log("push:", arr);

// 2. pop() - Remove from end
arr.pop();
console.log("pop:", arr);

// 3. unshift() - Add to start
arr.unshift(0);
console.log("unshift:", arr);

// 4. shift() - Remove from start
arr.shift();
console.log("shift:", arr);

// 5. concat() - Merge arrays
let arr2 = [6, 7, 8];
let merged = arr.concat(arr2);
console.log("concat:", merged);

// 6. join() - Array to string
console.log("join:", arr.join(" - "));

// 7. slice() - Extract part (non-destructive)
console.log("slice(1, 3):", arr.slice(1, 3));

// 8. splice() - Remove/replace/add (destructive)
arr.splice(2, 1, 10); // Remove 1 at index 2, insert 10
console.log("splice:", arr);

// 9. indexOf() - First index of value
console.log("indexOf(10):", arr.indexOf(10));

// 10. includes() - Check for existence
console.log("includes(3):", arr.includes(3));

// 11. forEach() - Loop over array
console.log("forEach:");
arr.forEach((el, i) => console.log(i, el));

// 12. map() - Transform array
let squared = arr.map(num => num * num);
console.log("map (squared):", squared);

// 13. filter() - Filter values
let even = arr.filter(num => num % 2 === 0);
console.log("filter (even):", even);

// 14. reduce() - Reduce to single value
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("reduce (sum):", sum);

// 15. find() - First match
let found = arr.find(num => num > 2);
console.log("find (>2):", found);

// 16. findIndex() - Index of first match
let foundIndex = arr.findIndex(num => num > 2);
console.log("findIndex (>2):", foundIndex);

// 17. sort() - Sort elements (as strings by default)
let unsorted = [4, 1, 10, 2];
unsorted.sort((a, b) => a - b);
console.log("sort (numeric):", unsorted);

// 18. reverse() - Reverse array
unsorted.reverse();
console.log("reverse:", unsorted);

// 19. every() - All items match
console.log("every > 0:", arr.every(n => n > 0));

// 20. some() - At least one matches
console.log("some > 4:", arr.some(n => n > 4));

// 21. fill() - Replace all values
let filled = new Array(5).fill(7);
console.log("fill:", filled);

// 22. flat() - Flatten nested arrays
let nested = [1, [2, [3, 4]]];
console.log("flat(2):", nested.flat(2));

// 23. toString() - Convert to string
console.log("toString:", arr.toString());
