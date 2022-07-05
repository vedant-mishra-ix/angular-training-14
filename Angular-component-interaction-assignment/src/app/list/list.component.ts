import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }
  @Input() user_record: any = [];
  @Output() user_record_edit: EventEmitter<any> = new EventEmitter();
  edit_user: any = [];
  edit_record(event: any, i: any) {
    // this.edit_user = this.user_record;
    // this.user_record_edit.emit(this.edit_user);
    // console.log("list child ",this.edit_user)
    this.edit_user = event;
    this.user_record_edit.emit(this.edit_user);
    console.log("editt123", event, "id:", i)
    console.log("editt second", this.edit_user)
  }
  delete(i: any) {
    // this.user_record.pop(this.user_record)
    this.user_record.splice(i, 1);
    // console.log("delete:  ",i)
    // console.log("d",this.user_record)
    // for(var a = 0 ; a < this.user_record.length ; i++)
    // {
    //   if(this.user_record[i] == i)
    //   {
    //     this.user_record.splice(i,1)
    //   }
    // }
  }
  // person_data:any =
  // [
  //   {
  //     id:'1',
  //     firstname:'parth',
  //     lastname:'kulkarni',
  //     email:'parth@gmail.com',
  //     dob:'11-06-1992',
  //     mobile:'9090987879'
  //   },
  //   {
  //     id:'2',
  //     firstname:'shardul',
  //     lastname:'kulkarni',
  //     email:'shardul@gmail.com',
  //     dob:'11-06-1995',
  //     mobile:'9090987879'
  //   },
  //   {
  //     id:'3',
  //     firstname:'nikita',
  //     lastname:'kaki',
  //     email:'nikita@gmail.com',
  //     dob:'11-06-2005',
  //     mobile:'9090989999'
  //   },
  // ]
}
