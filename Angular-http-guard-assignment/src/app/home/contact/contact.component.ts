import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactDetails:FormGroup = new FormGroup({});
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.contactDetails = this.fb.group(
      {
       email:['',[Validators.required]],
       password:['',[Validators.required]],
       confirmPassword:['',[Validators.required]],
      }
    )
  }
  Submit()
  {
    console.log("Submit Succesfull:", this.contactDetails.value)
  }
  get contact()
  {
    return this.contactDetails.controls;
  }

}
