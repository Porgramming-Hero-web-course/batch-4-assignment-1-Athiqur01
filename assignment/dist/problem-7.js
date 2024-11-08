"use strict";
//6.Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const age = 2024 - this.year;
        console.log(age);
    }
}
const car = new Car('Honda', 'Civic', 2015);
car.getCarAge();
