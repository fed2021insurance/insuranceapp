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
    console.log(this.userSer.LogIn({ username: "user1", password: "1234"}));
  }
}

