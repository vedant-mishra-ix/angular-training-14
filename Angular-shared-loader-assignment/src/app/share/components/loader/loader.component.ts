import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  displayStyle = "none";
  constructor() { }
  openSpinner()
  {
    this.displayStyle = 'block';
  }
  ngOnInit(): void {
  }

}
