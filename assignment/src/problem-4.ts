//4.Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type CircleArea = { shape: 'circle';
     radius: number | string; };
     
type RectangleArea = { shape: 'rectangle'; 
     width: number | string; 
     height: number | string; };

type Shape = CircleArea | RectangleArea;

const calculateShapeArea = (shape: Shape): number => {
    
    const toNumber = (value: number | string): number =>
        typeof value === 'number' ? value : parseFloat(value);

    if (shape.shape === 'circle') {
        const radius = toNumber(shape.radius);
        return Math.PI * radius * radius;
    } else if (shape.shape === 'rectangle') {
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