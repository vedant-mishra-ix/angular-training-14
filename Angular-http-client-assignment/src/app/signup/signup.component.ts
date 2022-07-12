import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../core/service/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registration : FormGroup = new FormGroup({});
  ErrorMessage:boolean = false;
  SuccesMessage:boolean = false;
  constructor(private fb : FormBuilder ,private signupService : RegistrationService) {
    this.registration = fb.group({
      userName:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required]
    })
   }

   submit()
   {
    if(this.registration.invalid)
    {
      this.ErrorMessage = true;
    }
    else
    {
      alert("Registration Done")
      this.SuccesMessage = true;
      return this.signupService.submitData(this.registration.value)
    }
   }
   get registrationValidation()
   {
    return this.registration.controls;
   }
  // submit()
  // {
  //   let a = this.registration.value.userName;
  //   console.log(this.registration.value,"k", a)
  //   this.htt.post<any>("https://tech-resources-core-api.azurewebsites.net/Register" , this.registration.value)
  //   .subscribe((res)=>{alert("signup successfull"+res);
  //   this.registration.reset();
  //   this.route.navigate(['login']);
  // }, error =>{ alert("error found")} )
  // }

  ngOnInit(): void {
  }

}
