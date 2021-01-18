import { Injectable } from '@angular/core';
import { CarsService } from "./cars.service";
import { PeopleService } from "./people.service";

import { HttpClient } from "@angular/common/http";
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currentUser: boolean = false;
  userId: string;

S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

mkGuid() {
  return (this.S4() + this.S4() + "-" + this.S4() + "-4" + this.S4().substr(0, 3) + "-" + this.S4() + "-" + this.S4() + this.S4() + this.S4().toLowerCase())
} 

  constructor(private http: HttpClient, private cars: CarsService, private persons: PeopleService) { }


  LogIn(formObj: { username: string, password: string }) {

   this.http.get(
     "https://insurance-45bd1-default-rtdb.firebaseio.com/state/.json"
    ).subscribe(resData => { 
      let keys = Object.keys(resData);

      for(let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if(resData[key].username === formObj.username && resData[key].password === formObj.password) {
         this.currentUser = true;
         this.userId = key;
        }
      }
      console.log([resData, this.userId]); //testng
    })

  }


  LogOut() {
    this.currentUser = false;
  }


  CreateUser(username: string, password: string) {
    let newId = this.mkGuid();
    let newUser = { [newId]: { username, password }}

    this.http.patch("https://insurance-45bd1-default-rtdb.firebaseio.com/state/.json", newUser).subscribe(res => {
      this.currentUser = true;
    })
  }


  SendClaim() {
    let formContent = { form: { cars: this.cars.cars, people: this.persons.persons } };
    this.http.patch(`https://insurance-45bd1-default-rtdb.firebaseio.com/state/${this.userId}/.json`, formContent).subscribe(res => console.log(res));
  }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.currentUser);
      }, 1000)
    })

    return promise;
  }
}
