import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {

  baseUrl = 'https://tech-resources-core-api.azurewebsites.net';

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
  return this.http.post<any>(`${this.baseUrl}/Login`, loginData);
  }

  dummyData:any = [
    {
      id:3,
      name:'parth',
      email:'parth@gmail.com'
    },
    {
      id:4,
      name:'rohti',
      email:'rohit@gmail.com'
    },
    {
      id:5,
      name:'nikita',
      email:'nikita@gmail.com'
    },
    {
      id:6,
      name:'trupti',
      email:'trupti@gmail.com'
    },
    {
      id:7,
      name:'raj',
      email:'raj@gmail.com'
    }
  ]
}
