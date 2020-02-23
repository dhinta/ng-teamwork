import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { InputContainerComponent } from './components/input-container/input-container.component';



@NgModule({
  declarations: [ErrorMessageComponent, InputContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMessageComponent,
    InputContainerComponent
  ],
  providers: []
})
export class SharedModule { }
