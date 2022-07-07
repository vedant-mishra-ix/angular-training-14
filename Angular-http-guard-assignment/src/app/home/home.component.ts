import { Component, OnInit } from '@angular/core';
import { HomeService } from '../core/services/home.service';
import { RegistrationserviceService } from '../core/services/registrationservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
