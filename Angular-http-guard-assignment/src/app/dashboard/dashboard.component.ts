import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../core/auth-guard/auth-guard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authService : AuthGuardService) { }

  ngOnInit(): void {
    console.log("token get:", this.authService.getToken())
  }

}
