//1. Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

const sumArray=(numbers:number[]):number=>{
    let sum:number=0
    numbers.forEach(num => {
        sum+=num
    });
    
    return sum
}
const res= sumArray([1,2,3,5,8])
console.log(res)