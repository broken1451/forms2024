import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {

    constructor() { }

    // validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    //     const email = control.value;
    //     console.log(email);
    //     return of({
    //         emailTaken: true
    //     }).pipe(
    //         delay(2000)
    //     );
    // }

    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        const email = control.value;
        const httpCallObservable = new Observable<ValidationErrors | null>(subscriber => {
            console.log(email);
            if (email == 'adrian@gmail.com') {
                subscriber.next({
                    emailTaken: true
                });
                subscriber.complete();
            }
            subscriber.next(null);
            subscriber.complete();
        }).pipe(
            delay(2000)
        );
        return httpCallObservable;
    }

    // optional
    // registerOnValidatorChange?(fn: () => void): void {
    //     throw new Error('Method not implemented.');
    // }

}