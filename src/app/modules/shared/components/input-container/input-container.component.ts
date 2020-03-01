import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { ValidationMessageResponse } from '../../models/validation';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss']
})
export class InputContainerComponent implements OnInit, AfterContentInit {

  public active: boolean;

  @Input() labelText: string;
  @Input() labelFor: string;
  @Input() required = false;
  @Input() errors: ValidationMessageResponse;
  @Input() isFormSubmitted: boolean;

  @ContentChild('inputElem', {static: false}) inputRef: ElementRef;

  constructor(private renderer2: Renderer2) { }

  ngOnInit() {
    console.log(this.labelText, this.required);
  }

  ngAfterContentInit() {
    this.renderer2.listen(this.inputRef.nativeElement, 'blur', () => {
      if (!this.inputRef.nativeElement.value) {
        this.toggleFocus();
      }
    });
  }

  toggleFocus() {
    this.active = !this.active;
  }
}
