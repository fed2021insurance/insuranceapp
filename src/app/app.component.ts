import { Component } from '@angular/core';

import { UsersService } from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insuranceapp';

  constructor(private userSer: UsersService) {}

  funcToTestService() {
    let res = this.userSer.LogIn({ username: "sabit", password: "suravi143" });
  }

  checkState() {
    this.userSer.LogOut();
  }

  checkCurrentUsr() { console.log(this.userSer.currentUser) }

  createUser() { 
    this.userSer.CreateUser("sabit", "suravi143");
  }

  sendForm() { this.userSer.SendClaim() }
}
