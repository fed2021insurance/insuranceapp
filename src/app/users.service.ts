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
        if (resData[key].username === formObj.username && resData[key].password === formObj.password) {
         this.currentUser = true;
        }
      }
  
      // console.log(resData); 
    })

    // if(req === null) {
    //   return "User Not Found"
    // } else {
    //   return this.currentUser;
    // }
  }

  LogOut() {
    this.currentUser = false;
  }

  CreateUser(formObj: Object) {
    let newUser = "httpReq_w/FormObj's_content";
    if(newUser) { return this.currentUser } else { return "Error from httpReq" }
  }

  SendClaim() {
    let formContent = "contentFromBothTheServices";
    let reqObj = { url: `firebase/state/${this.userId}/.json`, method: "POST", data: formContent };
  }

}
