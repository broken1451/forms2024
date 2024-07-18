import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider, emailPattern, firstNameAndLastnamePattern } from '../../../shared/validators/validators.functions';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    // email: ['', [Validators.required, Validators.pattern(emailPattern)],[new EmailValidatorService()]],
    name: ['', [Validators.required, Validators.pattern(firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(emailPattern)],[this.emailService]],
    username: ['', [Validators.required, cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  }, { 
    validators: [
      this.validatorsService.isFieldOneEqualToFieldTwo('password', 'password2')
    ]
  });

  constructor(private fb: FormBuilder, private validatorsService: ValidatorsService, private emailService: EmailValidatorService) { }

  ngOnInit() { }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  }


  isValidField(field: string) {
    return this.validatorsService.isValidField(field, this.myForm);
  }

  getFieldError(field: string): any {
    if (!this.myForm.controls[field]) {
      return;
    }

    const errors = this.myForm.controls[field].errors || {};

    for (const iterator of Object.keys(errors)) {
      // console.log((errors))
      switch (iterator) {
        case 'required':
          return 'This field is required';
        case 'minlength':
          return `This field must have at least ${errors['minlength'].requiredLength} characters`;
        case 'min':
          return 'This field must be greater than 0';
        default:
          return 'Error';
      }
    }
  }

}
