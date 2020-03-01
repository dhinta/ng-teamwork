import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ValidationMessageContent, ValidationMessageResponse } from '../models/validation';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  private validationMessage: ValidationMessageContent;

  constructor(private httpClient: HttpClient) {}

  getValidationMessageContent(): Observable<ValidationMessageContent> {
    return this.httpClient
      .get('/assets/data/validation-message.json')
      .pipe(
        tap((data: ValidationMessageContent) => {
          this.validationMessage = data;
        })
      );
  }

  required(key: string): (c: FormControl) => ValidationMessageResponse | null {
    return (control: FormControl): ValidationMessageResponse | null => {
      const valid = Validators.required(control);
      let res = null;

      if (valid) {
        res = {
          message: this.validationMessage[key],
          success: false
        };
      }
      return res;
    };
  }

  email(key: string): (c: FormControl) => ValidationMessageResponse | null {
    return (control: FormControl): ValidationMessageResponse | null => {
      const valid = Validators.email(control);
      let res = null;

      if (valid) {
        res = {
          message: this.validationMessage[key],
          success: false
        };
      }
      return res;
    };
  }
}
