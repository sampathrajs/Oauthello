import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';

import {NewaccountComponent} from './newaccount/newaccount.component';
import {InfoComponent} from './info/info.component';
import {PaymentComponent} from './payment/payment.component';
import { Component } from '@angular/core/src/metadata/directives';
import {MainComponent} from './main/main.component';
import {BookOathelloComponent} from './book-oathello/book-oathello.component';
import {FinalstepComponent} from './finalstep/finalstep.component';
const routes: Routes =[
    { path: 'newaccount',     component:NewaccountComponent},
    { path: 'payment',     component:PaymentComponent},
    { path: 'info',     component:InfoComponent},    
    { path: 'changepassword',   component: ChangepasswordComponent},
    { path: 'verifyemail',    component: VerifyemailComponent},
    { path: 'main',    component: MainComponent},
    { path: 'final', component:FinalstepComponent},
    { path:'bookoathello', component:BookOathelloComponent},
    { path: '',               redirectTo: 'newaccount', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
