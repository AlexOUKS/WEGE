import { Component, OnInit } from '@angular/core';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormGroup } from '@angular/forms';
import { LoginForm } from '../entities/loginForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  
  constructor(private _fb: RxFormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this._fb.formGroup(new LoginForm());
  }

}
 