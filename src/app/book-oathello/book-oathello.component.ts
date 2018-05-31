import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-oathello',
  templateUrl: './book-oathello.component.html',
  styleUrls: ['./book-oathello.component.css']
})
export class BookOathelloComponent implements OnInit {
  latitude: any;
  longitude: any;
  minZoom: number = 15;
  bookoauthelloForm: FormGroup;
  profileFile: File;
  Address: '';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.bookoauthelloForm = this.fb.group({
      type:['solicitor'],
      documents:['',[Validators.required]],
      exhibits:['',[Validators.required]],
      notes:['',[Validators.required]]
    });
    this.latitude = 53.342123;
    this.longitude = -6.283218;
  }
  placeMarker($event){

  }

}
