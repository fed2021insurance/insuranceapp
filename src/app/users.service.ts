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
  claims = [];

  constructor(private http: HttpClient) { }

  LogIn(formObj: { username: string, password: string }) {

   this.http.get(
      "https://insuranceprj-default-rtdb.firebaseio.com/state/.json"
    ).subscribe(resData => { 
      let keys = Object.keys(resData);

      for(let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if(resData[key].username === formObj.username && resData[key].password === formObj.password) {
         this.currentUser = true;
        }
      }
      console.log(resData);
    })

  }

  LogOut() {
    this.currentUser = false;
  }

  CreateUser(username: string, password: string) {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    let mkGuid = () => {
      return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4().toLowerCase())
    } 

    let newId = mkGuid();
    let newUser = { [newId]: { username, password }}
    this.http.patch("https://insuranceprj-default-rtdb.firebaseio.com/state/.json", newUser).subscribe(res => {
      console.log(res);
    })
  }

  SendClaim() {
    let formContent = "contentFromBothTheServices";
    let reqObj = { url: `firebase/state/${this.userId}/.json`, method: "POST", data: formContent };
  }

}
