import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  public date:any;
  d = new Date();
  year = this.d.getFullYear();
  size = '2px';
  Red = 'red';
  Green = 'green';
  public age:any;
  errorColor = 'red';
  successColor = 'green';
  input_arr =
    {
      firstName: 'guest',
      lastName: '',
      email: 'guest@gmail.com',
      mobile: ''
    }
  // obj = JSON.stringify(this.input_arr)
  profileSubmit() {
    console.log("Input array:", this.input_arr);
  }
  public currentAge(): void
  {
      if(this.date){
         var convert = new Date(this.date);
         var difference = Math.abs(Date.now() - convert.getTime());
         this.age = Math.floor((difference / (1000 * 3600 * 24))/365);
         console.log(this.age);
     }
 }
}
