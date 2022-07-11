import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

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
       email:['',[Validators.required,Validators.pattern(/\b[^0-9]([a-z]{1,}|[A-Z0-9]{1,})@[a-zA-z]{1,}\./)]],
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
