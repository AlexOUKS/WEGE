import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainForm } from '../entities/mainForm';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  ficheForm: FormGroup;
  
  constructor(private _fb: RxFormBuilder) { }

  ngOnInit(): void {
    this.ficheForm = this._fb.formGroup(new MainForm());
    console.log(this.ficheForm);
    console.log("ok")
  }

  onSubmit() {
     
    // stop here if form is invalid
    if (this.ficheForm.valid) {
       // display form values on success
    console.log(this.ficheForm.value);
    }    
  }

}
