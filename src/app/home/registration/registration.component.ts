import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationserviceserviceService } from 'src/app/core/services/registrationserviceservice.service';
import { LoaderComponent } from 'src/app/share/components/loader/loader.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @ViewChild(LoaderComponent) loader!:LoaderComponent;
  registration : FormGroup = new FormGroup({});
  ErrorMessage:boolean = false;
  SuccesMessage:boolean = false;
  constructor(private fb : FormBuilder ,private signupService : RegistrationserviceserviceService) {
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
      // this.loader.openSpinner()
      this.SuccesMessage = true;
      return this.signupService.submitData(this.registration.value)
    }
   }
   get registrationValidation()
   {
    return this.registration.controls;
   }

  ngOnInit(): void {
  }

}
