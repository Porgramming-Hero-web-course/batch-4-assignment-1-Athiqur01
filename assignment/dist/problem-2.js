"use strict";
//2.Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
function removeDuplicates(numbers) {
    const result = [];
    numbers.forEach(num => {
        if (!result.includes(num)) {
            result.push(num);
        }
    });
    return result;
}
const res2 = removeDuplicates([1, 2, 2, 4, 4, 3, 12]);
console.log(res2);
