import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'directive';
  // custom = true;
  // constructor( private el : ElementRef)
  // {
  // }
  // person_data =
  // [
  //   {
  //     firstname:'vedant',
  //     lastname:'mishra',
  //     zip:'208014',
  //     mobile:'8299303205'
  //   },
  //   {
  //     firstname:'vaibhav',
  //     lastname:'sharma',
  //     zip:'208017',
  //     mobile:'8299303909'
  //   },
  //   {
  //     firstname:'abhishek',
  //     lastname:'keshri',
  //     zip:'204908',
  //     mobile:'8299303209'
  //   },
  //   {
  //     firstname:'raja',
  //     lastname:'chirkut',
  //     zip:'208017',
  //     mobile:'8299303909'
  //   },
  //   {
  //     firstname:'pooja',
  //     lastname:'dhincheck',
  //     zip:'208017',
  //     mobile:'8299303909'
  //   },
  // ]
  // matchM:any =
  // {
  //     'background-color':'red',
  // }
  // matchC:any =
  // {
  //     'background-color':'green',
  // }
  // mobile = true;
  // mobileHide()
  // {
  //  this.mobile = !this.mobile;
  //   return this.mobile
  // }

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
  // edit_data:any;
  // edit_data1:any;
  // person_add_first(event:any)
  // {
  //   this.edit_data = event;
  // }
  // person_add(event:any)
  // {
  //   this.edit_data = event;
  // }
  user_record: any;
  getuser_data(event: any) {
    this.user_record = event;
  }
  edit_record: any = [];
  edituser_data(event: any) {
    this.edit_record = event;
    console.log("edit 1", event)
    console.log("edit 2", this.edit_record.firstName)
  }
}
