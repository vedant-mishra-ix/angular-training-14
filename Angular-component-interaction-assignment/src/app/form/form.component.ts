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
  rset() {
    this.user_arr = [];   // reset form field which through we are able to store multiple records
  }
  ngOnInit(): void {
  }
}
