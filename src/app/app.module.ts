import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';



import {NewaccountComponent} from './newaccount/newaccount.component';
import { AgmCoreModule } from '@agm/core';
import { InfoComponent } from './info/info.component';
import {TokenInterceptor} from './Authentication/oathello-interceptor';
import { PaymentComponent } from './payment/payment.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { NgxPasswordToggleModule } from 'ngx-password-toggle';
import * as $ from 'jquery';
import {CardModule} from 'ngx-card/ngx-card';

import { MainComponent } from './main/main.component';

  // services
import {GeoService} from './shared/geoService';
import {CommonService} from './shared/common.services';
import { BookOathelloComponent } from './book-oathello/book-oathello.component';
import { FinalstepComponent } from './finalstep/finalstep.component';



@NgModule({
  declarations: [
    AppComponent,     
    NewaccountComponent, InfoComponent, PaymentComponent,ChangepasswordComponent,VerifyemailComponent, MainComponent, BookOathelloComponent, FinalstepComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,CardModule,
    RouterModule,ReactiveFormsModule,HttpClientModule,    
    AppRoutingModule,  AgmCoreModule.forRoot({apiKey: 'AIzaSyBpABJfkHB1hB6XV0BSh5oCG6-pMHCdS-g'}),
    NgxPasswordToggleModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true},GeoService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
