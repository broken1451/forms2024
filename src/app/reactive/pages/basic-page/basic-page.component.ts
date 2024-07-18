import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


const rxt8089 = {
  name: 'rxt8089',
  price: 100,
  storage: 50
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.scss'
})
export class BasicPageComponent implements OnInit {


  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)], []],
    price: [0, [Validators.required, Validators.min(0)], []],
    storage: [0, [Validators.required, Validators.min(0)], []],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.myForm.reset(rxt8089);
  }

  isValidField(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
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

  onSave() {

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    // console.log(this.myForm.value);
    this.myForm.reset({
      name: '',
      price: 0,
      storage: 0
    });
  }



}
