"use strict";
//4.Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
const calculateShapeArea = (shape) => {
    const toNumber = (value) => typeof value === 'number' ? value : parseFloat(value);
    if (shape.shape === 'circle') {
        const radius = toNumber(shape.radius);
        return Math.PI * radius * radius;
    }
    else if (shape.shape === 'rectangle') {
        const width = toNumber(shape.width);
        const height = toNumber(shape.height);
        return width * height;
    }
    throw new Error("Invalid shape type");
};
// Sample Input
const circleArea = calculateShapeArea({ shape: "circle", radius: '5' });
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: "4", height: 6 });
console.log(circleArea);
console.log(rectangleArea);
