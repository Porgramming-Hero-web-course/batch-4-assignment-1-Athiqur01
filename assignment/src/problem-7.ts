//6.Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car{
    constructor(public make:string, public model:string, public year:number){}
    getCarAge(){
        const age=2024-this.year
        console.log(age)
    }
}

const car=new Car('Honda', 'Civic', 2015)
car.getCarAge()