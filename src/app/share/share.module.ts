import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationserviceserviceService } from '../core/services/registrationserviceservice.service';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    AlertBoxComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  // providers:[RegistrationserviceserviceService],
  exports:[AlertBoxComponent,LoaderComponent]
})
export class ShareModule { }
