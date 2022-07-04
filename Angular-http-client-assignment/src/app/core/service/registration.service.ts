import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient , private route : Router) {
   }
   submitData(registeredData:string)
   {
    this.http.post<any>("https://tech-resources-core-api.azurewebsites.net/Register",registeredData).subscribe((res) =>{
      alert("Registered successfull"+res.userName);
      this.route.navigate(['login']);
    },error => {alert("Error got"+error)})
   }
   userLogin(loginData:string)
   {
    this.http.post<any>("https://tech-resources-core-api.azurewebsites.net/Login", loginData).subscribe(res => { this.route.navigate(['dashboard'])
      // const userprofile = res.map((m:any) =>
      // {
      //   return m == loginData ;
      // });
      // if(userprofile)
      // {
      //   alert("successfull login");
      //   this.route.navigate(['signup']);
      // }
      // else
      // {
      //   alert("user not found");
      // }
    }, error => {alert("error found") });
   }
}
