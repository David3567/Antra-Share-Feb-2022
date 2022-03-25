import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { NewUser } from '../interfaces/newUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl='http://localhost:4231/api'
  private register = 'register'
  private createNewAccount = 'createNewAccount'

constructor(private http: HttpClient) { }

registerUser(user: any) {
  return this.http.post([this.baseUrl, this.register, this.createNewAccount].join('/'), user) as Observable <
    NewUser>;
}


emailExists(email: string): Observable<boolean> {
  return of(email).pipe(
    delay(500),
    map((email) => {
      const emails = ['consult@zoaibkhan.com', 'zoaib@gmail.com'];
      return emails.includes(email);
    })
  );
}

uniqueEmailValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return this.emailExists(control.value).pipe(
      map((exists) => (exists ? { emailExists: true } : null)),
      catchError(async (err) => null)
    );
  };
}

}
