import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationserviceserviceService } from 'src/app/core/services/registrationserviceservice.service';
import { LoginComponent } from 'src/app/home/login/login.component';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss']
})
export class AlertBoxComponent implements OnInit {
  // @ViewChild(LoginComponent) Login  = new LoginComponent();
  @Input() title:any;
  @Input() message:any;
  @Input() btnOkText:any;
  @Input() btnCancelText:any;
  constructor(private LoginService: RegistrationserviceserviceService) { }
  ngOnInit(): void {

  }
  displayStyle = "none";
  id:number=0;
  deleteUserRecord:any=[];

  openPopup(id:any,list:any) {
    this.displayStyle = "block";
    this.id = id;
    this.deleteUserRecord = list;
  }
  closePopup() {
    this.displayStyle = "none";
  }
  // public decline() {
  //   this.activeModal.close(false)
  // }

  // public accept() {
  //   this.activeModal.close(true);
  // }

  // public dismiss() {
  //   this.activeModal.dismiss();
  // }
}
