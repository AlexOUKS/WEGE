import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators'; 
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'fiche', component: FormComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
=======

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
>>>>>>> 8793e06ef8ab320291c8f84a78d8a9c517dd884c
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
