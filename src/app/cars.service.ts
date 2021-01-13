import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars = [];
  constructor() { }

  addCar(car: Object) {
    this.cars.push(car);
  }
  
  removeCar(index: number) {
    this.cars.splice(index, 1);
  }

}
