//6.Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
interface Profile {
    name:string;
    age:number;
    email:string
}
interface PartialProfile {
    name?:string;
    age?:number;
    email?:string
}
const updateProfile=(profile:Profile , update:PartialProfile):Profile=>{
    return {...profile, ...update}
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 35,name:'Ali' }));