import { Component, OnInit } from '@angular/core';
import { Changepassword } from 'app/changepassword/changepassword.model';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { PasswordValidation } from '../pipes/passwordvalidation';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
})
export class ChangepasswordComponent implements OnInit {
  changepasswordfields : Changepassword;
  changePasswordForm: FormGroup;
  
  constructor(private fb:FormBuilder) {
      
  }

  ngOnInit() {
    this.changePasswordForm = this.fb.group({
        oldpassword : ['', [Validators.required]],
        password : ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword : ['', [Validators.required, Validators.minLength(8)]],
    }, {validator : PasswordValidation.MatchPassword})
  }

  Save(changePasswordForm: FormControl){
    console.log(this.changePasswordForm.value);
  }

  resetForm(changePasswordForm? : FormGroup)
  {
    if(changePasswordForm !=null){
      changePasswordForm.reset();
      this.changepasswordfields = {
        oldpassword:'',
        password:'',
        confirmPassword:''
      }
    }
  }
}
