import { Component, OnInit, NgZone } from '@angular/core';
import { newaccount } from '../Model/newaccount';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PasswordValidation } from '../pipes/passwordvalidation';
import { GeoService } from '../shared/geoService';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { CommonService } from '../shared/common.services';



@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.scss']
})
export class NewaccountComponent implements OnInit {
  latitude: any;
  longitude: any;
  minZoom: number = 15;
  newaccountForm: FormGroup;
  profileFile: File;
  Address: '';



  constructor(private fb: FormBuilder, private geoService: GeoService, private commonService: CommonService) {

  }

  ngOnInit() {

    this.newaccountForm = this.fb.group({
      description: [''],
      firstname: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required]],
      m_number: ['', [Validators.required, Validators.minLength(10)]],
      professional: ['solicitor', [Validators.required]],
      sn_number: ['', [Validators.required]],
      fees: ['', [Validators.required]],
      address: ['']
    }, { validator: PasswordValidation.MatchPassword });
    this.setCurrentPosition();
  }
  save() {
    this.commonService.nextTab();

  }
  picImage() {
    $(".file-upload").click();
  }
  readURL(event: any) {
    let file = event.target.files[0];
    if (file) {
      this.profileFile = file;
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#profile-pic').attr('src', reader.result);
      }
      reader.readAsDataURL(file)
    }
  }
  placeMarker($event) {
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress($event.coords.lat, $event.coords.lng)
  }
  getAddress(lat, lan) {
    this.geoService.getLocation(lat, lan, (result) => {
      if (result.status == "success") {
        this.Address = result.result.formatted_address;
        this.newaccountForm.controls['address'].setValue(result.result.formatted_address ? result.result.formatted_address : '');

      } else {
        console.log(result.result);
      }
    });
  }
  setProfessional(professional) {
    this.newaccountForm.controls['professional'].setValue(professional ? professional : '');
  }
  private setCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        if (position) {
          this.getAddress(position.coords.latitude, position.coords.longitude);
        }
      }, (error) => {
        if (error.code == error.PERMISSION_DENIED) {
          this.latitude = 53.342123;
          this.longitude = -6.283218;
          this.getAddress(53.342123, -6.283218);
        }
      });
    }
  }


}
