import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listt-id',
  templateUrl: './listt-id.component.html',
  styleUrls: ['./listt-id.component.scss']
})
export class ListtIdComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  @Input() list_arr:any;

  public list_id:any;
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.list_id = id;
    alert(this.list_id)
  }

}
