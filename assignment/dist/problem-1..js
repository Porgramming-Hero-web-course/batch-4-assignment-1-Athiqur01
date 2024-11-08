"use strict";
//1. Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
const sumArray = (numbers) => {
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    });
    return sum;
};
const res = sumArray([1, 2, 3, 5, 8]);
console.log(res);
