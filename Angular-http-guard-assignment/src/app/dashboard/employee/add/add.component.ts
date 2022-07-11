import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/core/auth-guard/auth-guard.service';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Bloodgroup } from 'src/app/core/services/model/bloodgroup';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  Error ='red';
  Success ='green';
  BloodGroup:any = Bloodgroup
  Addetails: FormGroup = new FormGroup({});
  constructor(private route:Router,private fb : FormBuilder ,private employeeService: EmployeeService,private authService:AuthGuardService) { }

  ngOnInit(): void {
    this.Addetails = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      location:['',[Validators.required]],
      mobileNumber:['',[Validators.required,Validators.maxLength(10)]],
      aboutme:['',[Validators.required]],
      bloodGroup:['',[Validators.required]],
      isActive:[true]
    })
  }

  submit()
  {
    console.log("Add Details: ", this.Addetails.value);
    return this.employeeService.setEmployeeData(this.Addetails.value).subscribe(res =>
    {alert("Successfull details added"+res.result); this.route.navigate(['./admin/employee'])}, (error) => {alert("Error got")});
  }
  get AddDetails()
  {
    return this.Addetails.controls;
  }
}
