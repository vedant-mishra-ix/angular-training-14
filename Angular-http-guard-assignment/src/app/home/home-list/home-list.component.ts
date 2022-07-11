import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';
import { RegistrationserviceService } from 'src/app/core/services/registrationservice.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {


  constructor(private dummyService : RegistrationserviceService , private homeSerivce : HomeService) { }
  // dummyData:any[] = this.dummyService.dummyData;
  dummyData:any=[];
  ngOnInit(): void {
    this.homeSerivce.getData().subscribe((res) =>
    {
      {
        this.dummyData = res;
        console.log("res:" ,res)
      }
    }, error => {alert("something wrong in  home service")})
    console.log(this.dummyData)
  }
}
