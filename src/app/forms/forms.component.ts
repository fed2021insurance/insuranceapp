import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';
import { CarsService } from '../cars.service';
import { PeopleService } from '../people.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  reportCarForm: FormGroup;
  arr = []; //to hold the cars objects
  arr2 = []; // to hold the people objects
  
  constructor(private http: HttpClient, private userService: UsersService, public carsService: CarsService, public peopleService: PeopleService) {}

  ngOnInit(): void {
    this.reportCarForm = new FormGroup({
      "userData": new FormGroup({
        "mechDam": new FormControl(null),
        "bodyDam": new FormControl(null),
        "name": new FormControl(null),
        "injuries": new FormControl(null)
      })
    })
   
  }
  
  onAddCar(){
    this.arr.push({mechanicalDamange: new FormControl(null), bodyDamange: new FormControl});
    let watcher = interval(1000) //to watch the array and update if the array updates
    watcher.subscribe(() => {
      for(let i = 0; i < this.arr.length; i++){
        this.carsService.cars[i] = ({mechanicalDamange: this.arr[i].mechanicalDamange.value, bodyDamange: this.arr[i].bodyDamange.value})
      }
      
    })
    console.log(this.carsService.cars)
  }
  onRemoveCar(){
    this.arr.pop()
    this.carsService.removeCar(this.carsService.cars.length - 1)
  }

  onAddPerson(){
    this.arr2.push({name: new FormControl, injuries: new FormControl})
    let watcher = interval(1000) //to watch the array and update if the array updates
    watcher.subscribe(() => {
      for(let i = 0; i < this.arr2.length; i++){
        this.peopleService.persons[i] = ({name: this.arr2[i].name.value, injuries: this.arr2[i].injuries.value})
      }
    })
    console.log(this.peopleService.persons)
  }

  onRemovePerson(){
    this.arr2.pop()
    this.peopleService.removePerson(this.peopleService.persons.length - 1)
  }

  onSubmit(){
    this.carsService.cars.unshift({mechanicalDamange: this.reportCarForm.get('userData.mechDam').value, bodyDamange: this.reportCarForm.get('userData.bodyDam').value})
    this.peopleService.persons.unshift({name: this.reportCarForm.get('userData.name').value, injuries: this.reportCarForm.get('userData.injuries').value})
    return this.userService.SendClaim()
  
  }
}