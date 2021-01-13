import { Injectable } from '@angular/core';
import { CarsService } from "./cars.service";
import { PeopleService } from "./people.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currentUser: boolean = false;
  userId: string;
  claims = [];

  constructor() { }

  LogIn(formObj: Object) {

  }

  LogOut() {

  }

  CreateUser(formObj: Object) {

  }

  SendClaim() {

  }

}
