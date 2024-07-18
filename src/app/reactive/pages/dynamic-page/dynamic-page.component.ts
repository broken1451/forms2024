import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.scss'
})
export class DynamicPageComponent implements OnInit {


  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', [Validators.required]],
      ['Death Strading', [Validators.required]],
    ]),
    // newGame: ['', [Validators.required]]
  });
  
  public newGame:  FormControl = new FormControl('', [Validators.required]);
  // public newGame:  FormControl = this.fb.control('', Validators.required);

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }


  onSubmit(){
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log (this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([])
    // this.newGame.reset();
    this.myForm.reset();
  }

  isValidField(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

  isValidFieldArray(formArray: FormArray, index: number) {
    return formArray.controls[index].errors
    && formArray.controls[index].touched
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

  removeGame(index: number) {
    this.favoriteGames.removeAt(index);
  }

  addGame() {
    if (this.newGame.invalid) {
      return;
    }

    // console.log (this.myForm.controls['newGame'].value);
    const newGame =  this.newGame.value;
    this.favoriteGames.push(this.fb.control(newGame, [Validators.required]));
    this.newGame.reset();
  
    // if (this.myForm.controls['newGame'].invalid) {
    //   return;
    // }
    // const newGame = this.myForm.controls['newGame'].value;
    // this.favoriteGames.push(this.fb.control(newGame, []));
    // this.myForm.controls['newGame'].reset();
    
  }

}
