import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { UsersService } from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insuranceapp';

  constructor(private userSer: UsersService, private router: Router) {}
  
}
