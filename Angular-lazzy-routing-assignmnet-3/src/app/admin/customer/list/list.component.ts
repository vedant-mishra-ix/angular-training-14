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
      name:'raviraj'
    },
    {
      id:2,
      name:'pankaj'
    },
    {
      id:3,
      name:'shubham',
    },
    {
      id:4,
      name:'balaji',
    }
  ]

   selectid(item:any)
   {
    let id = this.route.navigate(['./list',item.id]);
   }
  // idAlert(item:any)
  // {
  //   let id = parseInt(this.alertId.snapshot.paramMap.get('id'));
  // }
  ngOnInit(): void {
  }

}
