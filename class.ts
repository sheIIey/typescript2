import {myQueue} from "./interface";

class Vehicle {
    make: string;
    model: string;
    year: number; 
    seats: number;

    constructor(make:string, model:string, year:number, seats:number){
        this.make = make;
        this.model = model;
        this.year = year;
        this.seats = seats;
    }
}

let car = new Vehicle("Ford", "Focus", 2009, 5);
