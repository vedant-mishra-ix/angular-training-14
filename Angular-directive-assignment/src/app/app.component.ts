import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directive';
  custom = true;
  constructor( private el : ElementRef)
  {
  }
  person_data =
  [
    {
      firstname:'vedant',
      lastname:'mishra',
      zip:'208014',
      mobile:'8299303205'
    },
    {
      firstname:'vaibhav',
      lastname:'sharma',
      zip:'208017',
      mobile:'8299303909'
    },
    {
      firstname:'abhishek',
      lastname:'keshri',
      zip:'204908',
      mobile:'8299303209'
    },
    {
      firstname:'raja',
      lastname:'chirkut',
      zip:'208017',
      mobile:'8299303909'
    },
    {
      firstname:'pooja',
      lastname:'dhincheck',
      zip:'208017',
      mobile:'8299303909'
    },
  ]
  matchM:any =
  {
      'background-color':'red',
  }
  matchC:any =
  {
      'background-color':'green',
  }
  mobile = true;
  mobileHide()
  {
   this.mobile = !this.mobile;
    return this.mobile
  }
}
