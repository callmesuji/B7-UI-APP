import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  empProfile = this.fb.group({
    username:[''],
    name:[''],
    email:[''],
    mobile:[''],
    dept:[''],
    salary:[''],
    gender:['']
  })
  message = ""
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }
  submitForm(){
   
  
}
}
