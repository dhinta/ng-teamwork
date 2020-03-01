import { ValidationService } from 'src/app/modules/shared/services/validation.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidationMessageContent } from '../modules/shared/models/validation';

@Injectable({
  providedIn: 'root'
})
export class ValidationResolverService implements Resolve<Observable<ValidationMessageContent>>  {

  constructor(private validationService: ValidationService) { }

  resolve(): Observable<ValidationMessageContent> {
    return this.validationService.getValidationMessageContent();
  }
}
