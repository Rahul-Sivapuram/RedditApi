import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-authentication-page',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './authentication-page.component.html',
  styleUrl: './authentication-page.component.css'
})
export class AuthenticationPageComponent implements OnInit{
  formHeading!:string;
  buttonHeading!:string;
  optionHeading!:string;
  authForm!:FormGroup;
  constructor(private router:Router){}

  ngOnInit(){
    this.authForm = new FormGroup({

    });
    if(this.router.url =="/signin"){
      this.formHeading="SIGN IN";
      this.buttonHeading="Login";
      this.optionHeading="Signup";
    }
    else{
      this.formHeading="SIGN UP";
      this.buttonHeading="Register";
      this.optionHeading="Signin";
    }
  }
}
