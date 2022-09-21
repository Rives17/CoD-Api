import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    email: [, Validators.required],
    password: [, Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return
    }
    this.loginForm.reset();


    console.log(this.loginForm);
  }

}
