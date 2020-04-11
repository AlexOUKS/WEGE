import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
>>>>>>> 8793e06ef8ab320291c8f84a78d8a9c517dd884c

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
<<<<<<< HEAD
    HeaderComponent,
    LoginComponent
=======
    HeaderComponent
>>>>>>> 8793e06ef8ab320291c8f84a78d8a9c517dd884c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
