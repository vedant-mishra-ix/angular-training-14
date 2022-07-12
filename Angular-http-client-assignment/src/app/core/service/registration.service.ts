import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  baseUrl:any = environment.baseApiUrl;
  constructor(private http : HttpClient , private route : Router) {
   }
   submitData(registeredData:string)
   {
    this.http.post<any>(`${this.baseUrl}/Registration`,registeredData).subscribe((res) =>{
      alert("Registered successfull"+res.userName);
      this.route.navigate(['login']);
    },error => {alert("Error got"+error)})
   }
   userLogin(loginData:string)
   {
    this.http.post<any>(`${this.baseUrl}/Login`, loginData).subscribe(res => { this.route.navigate(['dashboard'])
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
    console.log("Environment:", this.baseUrl)
   }
}
