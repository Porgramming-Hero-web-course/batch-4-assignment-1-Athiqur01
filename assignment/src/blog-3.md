
Why Type Guards Are Necessary?
In JavaScript values could be multiple types. When a function returns a value, it could be any primitive type. In typescript, without using type guard, it is not possible to determine the exact type. Using type guard in TypeScript we can narrow type and can get more accurate type checking.

1. typeof Type Guard:
The typeof operator checks for basic data types like string, number, boolean, and symbol. This is useful when handling union types.

Example:
function handleValue(value: string | number) {
    if (typeof value === "string") {
        console.log("String value:", value.toUpperCase());
    } else if (typeof value === "number") {
        console.log("Number value:", value.toFixed(2));
    }
}

handleValue("Hello"); 
handleValue(42);   

2. instanceof Type Guard: The instanceof operator checks whether an object is an instance of a specific class or constructor function. This type guard is beneficial when working with classes or object-oriented patterns.

Example:
class Dog {
    bark() {
        return "Woof!";
    }
}

class Cat {
    meow() {
        return "Meow!";
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        console.log(animal.bark());
    } else if (animal instanceof Cat) {
        console.log(animal.meow());
    }
}

makeSound(new Dog()); 
makeSound(new Cat()); 


3. in Operator Type Guard:
The in operator checks if a specific property exists on an object. This is especially useful with complex objects that share some but not all properties.
Example:
type CircleArea = { shape: 'circle';
     radius: number ; };

type RectangleArea = { shape: 'rectangle'; 
     width: number ; 
     height: number ; };

type Shape = CircleArea | RectangleArea;

const calculateShapeArea = (shape: Shape): number => {
    
    if ("radius" in shape) {
        return Math.PI * shape.radius ** 2;
    } else if ("width" in shape && "height" in shape) {
        return shape.width * shape.height;
    }
    
    throw new Error("Invalid shape type");
};

// Sample Input
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });

