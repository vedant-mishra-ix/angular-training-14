import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor() { }
  @Output() user_data_arr: EventEmitter<any> = new EventEmitter();
  user_arr: any =
    [
      {
        id:1,
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        mobile: ''
      }
    ];
  @Input() edit_record: any = [] = this.user_arr;
  new_arr: any = []; // for stroring user_arr[]cvalue in new_arr[] for taking value at index 0
  userData(event: any) {
    // console.log(this.user_arr.push(this.user_arr))
    // this.new_arr.push(this.user_arr);
    console.log(this.new_arr.push(this.user_arr))
    this.user_data_arr.emit(this.new_arr)
    console.log("form data: ", this.edit_record);
  }
  update(event:any)
  {
    // first-logic
    // this.new_arr = this.user_arr;
    // console.log(this.new_arr.push(this.user_arr))
    // this.user_data_arr.emit(this.new_arr)
    // second-logic
    if(this.edit_record.firstName)
    {
      this.edit_record.firstName = this.user_arr.firstName
    }
    if(this.edit_record.lastName)
    {
      this.edit_record.lastName = this.user_arr.lastName
    }
    if(this.edit_record.email)
    {
      this.edit_record.email = this.user_arr.email
    }
    if(this.edit_record.date)
    {
      this.edit_record.date = this.user_arr.date
    }
    if(this.edit_record.mobile)
    {
      this.edit_record.mobile = this.user_arr.mobile
    }
  }
  rset() {
    this.user_arr = [];   // reset form field which through we are able to store multiple records
  }
  ngOnInit(): void {
  }
}
