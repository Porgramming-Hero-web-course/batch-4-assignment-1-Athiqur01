//4.Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type CircleArea = { shape: 'circle'; radius: number; }
type RectangleArea = {
    shape:'rectangle';
    width: number;
    height: number;
  }
type Shape=CircleArea | RectangleArea
const calculateShapeArea=(shap:Shape):number=>{
    if(shap.shape==='circle'){
        const Radious=shap.radius
        return Math.PI*Radious*Radious
    }

    const length=shap.height
    const width=shap.width
    return length*width  
}

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// Sample Input 2:
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(rectangleArea)
