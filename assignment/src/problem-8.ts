//8.Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

type Obj={
    name:string,
    age:number,
    email:string
}
const validateKeys=(obj:Obj,keys:(keyof Obj)[]):boolean=>{
    const keysOfObj=Object.keys(obj) as (keyof Obj)[]
    return keys.every(key=>keysOfObj.includes(key))
}
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));