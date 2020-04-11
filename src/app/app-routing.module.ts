import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators'; 

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
