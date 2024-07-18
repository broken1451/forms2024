import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }

  public cantBeStrider(control: FormControl): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
      return {
        noStrider: true,
      };
    }
    // si regresa null todo esta bn no hay error
    return null;
  };

  public isValidField(field: string, myForm: FormGroup) {
    return myForm.controls[field].errors && myForm.controls[field].touched;
  }

  isFieldOneEqualToFieldTwo(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const formGroupTyped = formGroup as FormGroup;
      const pass1 = formGroupTyped.controls[field1].value;
      const pass2 = formGroupTyped.controls[field2].value;
  
      if (pass1 !== pass2) {
        formGroupTyped.controls[field2].setErrors({ noIguales: true });
        return { noIguales: true };
      }
  
      formGroupTyped.controls[field2].setErrors(null);
      return null;
    };
  }

}
