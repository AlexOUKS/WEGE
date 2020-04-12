import { Component, OnInit } from '@angular/core';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormGroup } from '@angular/forms';
import { LoginForm } from '../entities/loginForm';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  log: Observable<any>;
  
  constructor(private _fb: RxFormBuilder, private loginService:LoginService, private router: Router) {
   }

  ngOnInit(): void {
    this.loginForm = this._fb.formGroup(new LoginForm());
  }

  onSubmit() {
    console.log(this.loginForm.valid);
    if (this.loginForm.valid) {
      this.log = this.loginService.login(this.loginForm.value);

      this.log.subscribe(
          (data) => {
            sessionStorage.setItem('token', data.token);
            this.router.navigate(['/']);
          }, // success path
          error => console.log(error) // error path
      );
    }    
  }
}
 