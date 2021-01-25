import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  //@ViewChild('mechD') mechD: { nativeElement: any; }
  arr = [];
  arr2 = [];
  
  constructor(private http: HttpClient, private userService: UsersService, public carsService: CarsService, public peopleService: PeopleService) {}

  ngOnInit(): void {
    this.reportCarForm = new FormGroup({
      "userData": new FormGroup({
        "mechDam": new FormControl(null),
        "bodyDam": new FormControl(null),
        "name": new FormControl(null),
        "injuries": new FormControl(null)
        //"mechD": new FormControl(null)
      })
    })
   
  }

  
  //{mechanicalDamange: new FormControl(null), bodyDamange: new FormControl}
  onAddCar(){
    this.arr.push({mechanicalDamange: new FormControl(null), bodyDamange: new FormControl});
    //let carControl = new FormControl();
    let x = interval(1000)
    x.subscribe(() => {
      for(let i = 0; i < this.arr.length; i++){
        this.carsService.cars[i] = ({mechanicalDamange: this.arr[i].mechanicalDamange.value, bodyDamange: this.arr[i].bodyDamange.value})
      }
      
    })
    //this.carsService.cars.push({mechanicalDamange: this.arr[0].mechanicalDamange.value, bodyDamange: new FormControl})
    console.log(this.carsService.cars)
  }

  onAddPerson(){
    this.arr2.push({name: new FormControl, injuries: new FormControl})
    let x = interval(1000)
    x.subscribe(() => {
      for(let i = 0; i < this.arr2.length; i++){
        this.peopleService.persons[i] = ({name: this.arr2[i].name.value, injuries: this.arr2[i].injuries.value})
      }
    })
    //this.peopleService.persons.push({name: new FormControl, injuries: new FormControl})
    console.log(this.peopleService.persons)
  }

  onSubmit(){
    // this.carsService.cars.map(() => {
    //   let n = [{mechanicalDamange: this.arr[0].mechanicalDamange.value, bodyDamange: this.arr[0].bodyDamange.value}]
    //   return n
    // })
    this.carsService.cars.unshift({mechanicalDamange: this.reportCarForm.get('userData.mechDam').value, bodyDamange: this.reportCarForm.get('userData.bodyDam').value})
    this.peopleService.persons.unshift({name: this.reportCarForm.get('userData.name').value, injuries: this.reportCarForm.get('userData.injuries').value})
    return this.userService.SendClaim()
  
  }
}