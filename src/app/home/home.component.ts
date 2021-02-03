import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';  
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from "src/app/users.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthGuard, private router: Router, private formBuilder: FormBuilder, private userService: UsersService) { }

  ngOnInit(){
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): any {
    const formVal = this.form.value;
    const loginVal = {username: formVal.username, password: formVal.password}
    console.log(loginVal);
    

    if (this.form.invalid) {
      alert("Invalid Request");
      return;
    }

    this.userService.LogIn(loginVal)
      this.router.navigate(['form']);
  }

  newUser() {
    this.router.navigate(['signup']);
  }

}
