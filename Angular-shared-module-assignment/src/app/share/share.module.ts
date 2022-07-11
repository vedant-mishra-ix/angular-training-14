import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationserviceserviceService } from '../core/services/registrationserviceservice.service';



@NgModule({
  declarations: [
    AlertBoxComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  // providers:[RegistrationserviceserviceService],
  exports:[AlertBoxComponent]
})
export class ShareModule { }
