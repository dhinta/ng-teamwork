import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicBaseComponent } from './components/layout/public-base/public-base.component';
import { PrivateBaseComponent } from './components/layout/private-base/private-base.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
