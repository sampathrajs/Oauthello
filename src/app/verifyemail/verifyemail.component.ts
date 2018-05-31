import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, FormArray, Validators } from '@angular/forms';
import {CommonService} from '../shared/common.services';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent implements OnInit {
  
  verifyMailFormGroup : FormGroup;
  

  constructor(private fb : FormBuilder,private commonService:CommonService) { }

  ngOnInit() {
      this.verifyMailFormGroup = this.fb.group({
        verifymail : ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]]
      })
  }

  ConfirmMail(){
   this.commonService.nextTab();
  }
}
