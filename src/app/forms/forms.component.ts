import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';
import { CarsService } from '../cars.service';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  reportCarForm: FormGroup;
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
    this.carsService.cars.push({mechanicalDamange: new FormControl, bodyDamange: new FormControl})
    console.log(this.carsService.cars)
  }

  onAddPerson(){
    this.peopleService.persons.push({name: new FormControl, injuries: new FormControl})
    console.log(this.peopleService.persons)
  }

  onSubmit(){
    this.carsService.cars.unshift({mechanicalDamange: this.reportCarForm.get('userData.mechDam').value, bodyDamange: this.reportCarForm.get('userData.bodyDam').value})
    this.peopleService.persons.unshift({name: this.reportCarForm.get('userData.name').value, injuries: this.reportCarForm.get('userData.injuries').value})
    this.userService.SendClaim()
  
  }
}