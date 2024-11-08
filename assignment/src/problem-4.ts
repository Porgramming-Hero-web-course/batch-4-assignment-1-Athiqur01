//4.Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

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

console.log(circleArea);       
console.log(rectangleArea); 