import { RegistrationComponent } from './components/pages/registration/registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicBaseComponent } from './components/layout/public-base/public-base.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ValidationResolverService } from './services/validation-resolver.service';

const routes: Routes = [{
  path: '',
  component: PublicBaseComponent,
  resolve: {
    validationMessageContent: ValidationResolverService
  },
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'registration',
    component: RegistrationComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
