"use strict";
//8.Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
const validateKeys = (obj, keys) => {
    const keysOfObj = Object.keys(obj);
    return keys.every(key => keysOfObj.includes(key));
};
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
