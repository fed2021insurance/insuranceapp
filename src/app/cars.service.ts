import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars = []; //{machanicalDamage: "brokenExhaust", bodyDamage: "Bent Bumper"}
  constructor() { }

  addCar(car: Object) {
    return this.cars.push(car);
  }

  removeCar(index: number) {
    this.cars.splice(index, 1);
  }

}