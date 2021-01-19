import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth-gaurd.service';  
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { UsersService } from "src/app/users.service";
import { first } from 'rxjs/operators';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthGuard, private router: Router, private formBuilder: FormBuilder, private userService: UsersService) {


  }

  ngOnInit(): any {
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
      this.router.navigate(['home']);
  }

  newUser() {
    this.router.navigate(['signUp']);
  }

}
