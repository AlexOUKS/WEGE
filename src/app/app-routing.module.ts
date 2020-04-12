import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators'; 
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { AuthGuard } from './login/login.guard';
import { MainComponent } from './main/main.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ValidationComponent } from './validation/validation.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'new', component: NewAccountComponent },
  { path: 'fiche', canActivate: [AuthGuard], component: FormComponent },
  { path: 'validation', component: ValidationComponent },
  { path: '', component: MainComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
