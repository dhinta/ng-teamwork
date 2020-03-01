import { Component, OnInit, Input } from '@angular/core';
import { ValidationMessageResponse } from '../../models/validation';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input() errors: ValidationMessageResponse;
  @Input() isFormSubmitted: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.errors);
  }

}
