import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';
import { RegistrationserviceserviceService } from 'src/app/core/services/registrationserviceservice.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {

  constructor(private dummyService : RegistrationserviceserviceService , private homeSerivce : HomeService) { }
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
