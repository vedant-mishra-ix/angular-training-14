import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../core/service/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage:boolean = false;
  successMessage:boolean = false;
  loginProfile : FormGroup = new FormGroup({});
  constructor(private fb : FormBuilder  , private loginService : RegistrationService)
  {
    this.loginProfile = fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
   }
   login()
   {
    // this.loginProfile.reset();
    if(this.loginProfile.valid)
    {
      this.errorMessage = true;
    }
    else
    {
      this.successMessage = true;
    }
    return this.loginService.userLogin(this.loginProfile.value);
   }

   get loginValidation()
   {
    return this.loginProfile.controls;
   }
  //  login()
  //  {
  //   // let param={
  //   //   "username": "ramtajogi",
  //   //   "password": "RamtaJogi@123"
  //   // }
  //   this.htt.post<any>("https://tech-resources-core-api.azurewebsites.net/Login", this.loginProfile.value).subscribe(res => {
  //     const userprofile = res.map((m:any) =>
  //     {
  //       return m.userName == this.loginProfile.value.userName || m.password == this.loginProfile.value.password;
  //     });
  //     if(userprofile)
  //     {
  //       this.loginProfile.reset();
  //       alert("successfull login");
  //       this.route.navigate(['signup']);
  //     }
  //     else
  //     {
  //       alert("user not found");
  //     }
  //   }, error => {alert("error found") });
  //   console.log("login", this.loginProfile.value)
  //  }

  ngOnInit(): void {
    // return this.loginService.userLogin(this.loginProfile.value)
  }

}
