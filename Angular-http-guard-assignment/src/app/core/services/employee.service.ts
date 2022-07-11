import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../auth-guard/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient , private authSerive: AuthGuardService) { }

   getEmployeeData():Observable<any>
  {
    // const headers = {Authorization:`Bearer ${this.authSerive.getToken()}`};
    return this.http.get('https://tech-resources-core-api.azurewebsites.net/Employee');
  }

  setEmployeeData(employeeData:string):Observable<any>
  {
    // const headers = {Authorization:`Bearer ${this.authSerive.getToken()}`};
    return this.http.post(`https://tech-resources-core-api.azurewebsites.net/Employee`,employeeData);
  }
  deleteEmployeeData(index:number):Observable<any>
  {
    // console.log("delete service id : ", index)
    return this.http.delete(`https://tech-resources-core-api.azurewebsites.net/Employee/${index}`)
  }
  updateEmployeeData(employeeData:string):Observable<any>
  {
    return this.http.put(`https://tech-resources-core-api.azurewebsites.net/Employee`,employeeData)
  }
}
