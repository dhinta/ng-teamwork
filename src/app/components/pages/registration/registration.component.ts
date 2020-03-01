import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationService } from 'src/app/modules/shared/services/validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public form: FormGroup;
  public isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private validationService: ValidationService
  ) {
    this.form = this.formBuilder.group({
      name: '',
      email: [
        '',
        [
          this.validationService.required('login.email.required'),
          this.validationService.email('login.email.emailFormat')
        ]
      ],
      password: ['', this.validationService.required('login.password.required')]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.form);
    console.log(this.form.value);
  }

}
