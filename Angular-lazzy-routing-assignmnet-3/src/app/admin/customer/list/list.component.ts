import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor( private route: Router) { }

  list_arr = [
    {
      id:1,
      name:'raviraj',
      email:'ravi@gmail.com',
      mobile:'8299202304'
    },
    {
      id:2,
      name:'pankaj',
      email:'ravi@gmail.com',
      mobile:'8299202304'
    },
    {
      id:3,
      name:'shubham',
      email:'ravi@gmail.com',
      mobile:'8299202304'
    },
    {
      id:4,
      name:'balaji',
      email:'ravi@gmail.com',
      mobile:'8299202304'
    }
  ]

   selectid(Employeeid:number)
   {
    let id = this.route.navigate(['./admin/customer/list',Employeeid]);
   }
  ngOnInit(): void {
  }

}
