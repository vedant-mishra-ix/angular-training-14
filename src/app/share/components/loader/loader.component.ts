import { Component, OnInit } from '@angular/core';
import { AlertBoxService } from '../alert-box.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  displayStyle = "none";
  loading!: boolean;

  // openSpinner(active:any)
  // {
  //   this.displayStyle = 'block';
  // }

  constructor(private loaderService:AlertBoxService) {

    this.loaderService.Loading.subscribe((v) => {
      console.log(v);
      this.loading = v;
    });

  }

  ngOnInit(): void {
  }

}
