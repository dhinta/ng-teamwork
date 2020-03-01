import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicBaseComponent } from './components/layout/public-base/public-base.component';
import { PrivateBaseComponent } from './components/layout/private-base/private-base.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { SharedModule } from './modules/shared/shared.module';
import { ValidationResolverService } from './services/validation-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    PublicBaseComponent,
    PrivateBaseComponent,
    HomeComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    SharedModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient,
    ValidationResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
