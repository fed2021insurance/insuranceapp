import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars = []; //{machanicalDamage: "brokenExhaust", bodyDamage: "Bent Bumper"}
  constructor() { }

  addCar(car: Object) {
    this.cars.push(car);
  }

  removeCar(index: number) {
    this.cars.splice(index, 1);
  }

}
