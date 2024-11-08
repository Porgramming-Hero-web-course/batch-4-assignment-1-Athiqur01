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
//3.Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
//Example:
//Input: "I love typescript", "typescript"
//Output: 1
// Sample Input:
//countWordOccurrences("I love typescript", "typescript");
// Sample Output:
//1;
const countWordOccurrences = (sentence, word) => {
    const wordTolowerCase = word.toLowerCase();
    const sentenceToLowercase = sentence.toLowerCase();
    console.log(sentenceToLowercase);
    const splitedSentence = sentenceToLowercase.split(' ');
    console.log(splitedSentence);
    const noOfMatch = splitedSentence.filter(splitedWord => splitedWord === wordTolowerCase);
    return noOfMatch.length;
};
const res3 = countWordOccurrences('i Am am a Boy typescript', 'typescript');
console.log(res3);
const calculateShapeArea = (shap) => {
    if (shap.shape === 'circle') {
        const Radious = shap.radius;
        return Math.PI * Radious * Radious;
    }
    else if (shap.shape === 'rectangle') {
        const length = shap.height;
        const width = shap.width;
        return length * width;
    }
};
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// Sample Input 2:
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(circleArea);
//5.Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
const getProperty = (person, property) => {
    return person[property];
};
const res5 = getProperty({ name: 'Jaman', age: 12 }, 'age');
console.log(res5);
const updateProfile = (profile, update) => {
    return Object.assign(Object.assign({}, profile), update);
};
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 35, name: 'Ali' }));
const validateKeys = (obj, keys) => {
    const keysOfObj = Object.keys(obj);
    return keys.every(key => keysOfObj.includes(key));
};
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
