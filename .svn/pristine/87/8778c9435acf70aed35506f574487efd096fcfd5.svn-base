import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { info } from '../Model/info';
import { GeoService } from '../shared/geoService';
import {CommonService} from '../shared/common.services';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  infoForm: FormGroup;
  Countries: any;
  constructor(private fb: FormBuilder,private commonService:CommonService, private geoService: GeoService) { }

  ngOnInit() {
    this.infoForm = this.fb.group({
      companyName: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      location: ['', [Validators.required]]
    });
    this.Countries = this.geoService.countyList.countries.country;
  }
  save() {
    this.commonService.nextTab();
    
  }
  
}
