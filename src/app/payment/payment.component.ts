import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {CommonService} from '../shared/common.services';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentForm:FormGroup;
  constructor(private fb:FormBuilder, private commonService:CommonService) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required,Validators.minLength(16)]],
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],      
      cardExpDate: ['',[Validators.required]],
      cardCvv: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(4)]] 
    });
 
  }
  save(){
    this.commonService.nextTab();
  }

}
