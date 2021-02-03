import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth-guard.service';  
import { FormGroup, FormBuilder, Validators, FormsModule, FormControl } from '@angular/forms';
import { UsersService } from "src/app/users.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthGuard, private router: Router, private formBuilder: FormBuilder, private userService: UsersService) { }

  get usernameControl(){
    return this.form.get('username') as FormControl;
  }

  get passwordControl(){
    return this.form.get('password') as FormControl;
  }

  get emailControl(){
    return this.form.get('email') as FormControl;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

}
