import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../validators/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  registerForm: FormGroup = this.fb.group({
    username: [, [Validators.required, Validators.minLength(3)]],
    email: [, Validators.required, Validators.pattern(this.validatorService.emailPattern)],
    password: [, Validators.required, Validators.minLength(6), Validators.maxLength(12)],
    repeatPassword: [, Validators.required]
  }, {
    validators: [this.validatorService.camposIguales('password', 'repeatPassword')]
  });

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorsService) { }

  register() {
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return
    }
    this.registerForm.reset();

  }

  invalidForm( campo: string ) {
    return this.registerForm.get(campo)?.invalid
            && this.registerForm.get(campo)?.touched
  }
}
