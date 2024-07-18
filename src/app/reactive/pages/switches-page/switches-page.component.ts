import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.scss'
})
export class SwitchesPageComponent implements OnInit {

  public genders = [
    {
      value: 'M',
      text: 'Hombre'
    },
    {
      value: 'F',
      text: 'Mujer'
    }
  ];


  public myForm: FormGroup = this.fb.group({
    gender: [this.genders[0].value, [Validators.required]],
    wantNotifications: [true, [Validators.required]],
    termsAndCondition: [true, [Validators.requiredTrue]],
  });

  public person =  { 
    gender: 'F',
    wantNotifications: false,

  }
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm.reset({
      ...this.person
    });
  }


  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }    

    // this.person = this.myForm.value;
    // delete this.person.termsAndCondition;
    // delete this.person['termsAndCondition'];
    const { termsAndCondition, ...person } = this.myForm.value;
    this.person = person;
    console.log (this.myForm.value);
    console.log (person, termsAndCondition);
    
  }

  getFieldError(field: string): any {
    if (!this.myForm.controls[field]) {
      return;
    }

    const errors = this.myForm.controls[field].errors || {};

    for (const iterator of Object.keys(errors)) {
      switch (iterator) {
        case 'required':
          return 'Debe de aceptar las condiciones de uso.';
        case 'minlength':
          return `This field must have at least ${errors['minlength'].requiredLength} characters`;
        case 'min':
          return 'This field must be greater than 0';
        default:
          return 'Error';
      }
    }
  }

  isValidField(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

}
