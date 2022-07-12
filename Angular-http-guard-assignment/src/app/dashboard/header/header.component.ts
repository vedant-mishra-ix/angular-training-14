import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/core/auth-guard/auth-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthGuardService , private route : Router) { }

  ngOnInit(): void {
  }

  Logout()
  {
    this.route.navigate([''])
    return this.authService.deleteToken();
  }

}
