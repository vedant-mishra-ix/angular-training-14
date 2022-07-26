import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/core/auth-guard/auth-guard.service';
import { RegistrationserviceserviceService } from 'src/app/core/services/registrationserviceservice.service';
import { AlertBoxComponent } from 'src/app/share/components/alert-box/alert-box.component';
import { LoaderComponent } from 'src/app/share/components/loader/loader.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild(LoaderComponent) loader!: LoaderComponent;
  LoginSucces: boolean = false;
  errorMessage: boolean = false;
  successMessage: boolean = false;
  loginProfile: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private loginService: RegistrationserviceserviceService, private route: Router, private authService: AuthGuardService) {
    this.loginProfile = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    if (this.loginProfile.valid) {
      // this.successMessage = true;
      this.loginService.userLogin(this.loginProfile.value).subscribe(res => {
        this.successMessage = true;
        // this.loader.openSpinner()
        if (res.result) {
          console.log("token:", res);
          // this.loader.openSpinner()
          // alert("Welcome: "+this.loginProfile.value.userName)
          this.authService.setToken(res.result)
          setTimeout(() => {
            this.route.navigate(['admin'])
          }, 1000);

        }
      }, error => { alert("error found");this.errorMessage = true; });
    }
  }

  get loginValidation() {
    return this.loginProfile.controls;
  }

  ngOnInit(): void {
  }

}
