import { Component, OnInit } from '@angular/core';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormGroup } from '@angular/forms';
import { NewAccountForm } from '../entities/newAcctForm';
import { NewAccountService } from './new-account.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  newAcctForm: FormGroup;
  newAcct:Observable<any>;

  constructor(private _fb: RxFormBuilder, private newAccountService: NewAccountService, private router: Router) {
    this.newAcctForm = this._fb.formGroup(new NewAccountForm());
  }
  ngOnInit(): void {
  }

  
  onSubmit() {
    if (this.newAcctForm.valid) {
      this.newAcct = this.newAccountService.newUser(this.newAcctForm.value);

      this.newAcct.subscribe(
          (data) => {
          this.router.navigate(['/validation']);
          }, // success path
          error => console.log(error) // error path
      );
    }    
  }

}
