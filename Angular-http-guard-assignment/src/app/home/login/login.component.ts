import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/core/auth-guard/auth-guard.service';
import { RegistrationserviceService } from 'src/app/core/services/registrationservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: boolean = false;
  successMessage: boolean = false;
  loginProfile: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private loginService: RegistrationserviceService, private route: Router, private authService: AuthGuardService) {
    this.loginProfile = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    if (this.loginProfile.valid) {
      this.successMessage = true;
    }
    return this.loginService.userLogin(this.loginProfile.value).subscribe(res => {
      if (res.result) {
        console.log("token:", res);
        this.authService.setToken(res.result)
        this.route.navigate(['admin'])
      }
    }, error => { alert("error found") });
  }

  get loginValidation() {
    return this.loginProfile.controls;
  }

  ngOnInit(): void {
  }

}
