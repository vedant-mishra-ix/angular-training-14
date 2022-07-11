import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/core/auth-guard/auth-guard.service';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  Addetails: FormGroup = new FormGroup({});
  constructor(private route:Router,private fb : FormBuilder ,private employeeService: EmployeeService,private authService:AuthGuardService) { }

  ngOnInit(): void {
    this.Addetails = this.fb.group({
      firstName:[''],
      lastName:[''],
      location:[''],
      isActive:[true]
    })
  }

  submit()
  {
    console.log("Add Details: ", this.Addetails.value);
    return this.employeeService.setEmployeeData(this.Addetails.value).subscribe(res =>
    {alert("Successfull details added"+res.result); this.route.navigate(['dashboard'])}, (error) => {alert("Error got")});
  }
}
