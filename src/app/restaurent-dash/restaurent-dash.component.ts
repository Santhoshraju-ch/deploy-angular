import { Component, OnInit } from '@angular/core';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormGroup, FormBuilder }  from '@angular/forms';


@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css']
})
export class RestaurentDashComponent implements OnInit{

  formValue1!: FormGroup;

  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {

    this.formValue1=this.formBuilder.group(
      {
        name:[''],
        email:[''],
        moblie:[''],
        address:[''],
        services:['']
      }
    )
   
  }

}
