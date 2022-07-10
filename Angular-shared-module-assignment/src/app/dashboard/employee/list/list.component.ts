import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { AlertBoxComponent } from 'src/app/share/components/alert-box/alert-box.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild(AlertBoxComponent) alert!: AlertBoxComponent;
  @Output() record_edit: EventEmitter<any> = new EventEmitter();
  EmployeeList: any = [];
  updateArray: any = [];
  addUpdateData: any = [];
  // BloodGroup:any = Bloodgroup
  Addetails: FormGroup = new FormGroup({});
  constructor(private employeeList: EmployeeService, private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.employeeList.getEmployeeData().subscribe(res => {
      this.EmployeeList = res;
      console.log("value found", this.EmployeeList.result)
    });

    this.Addetails = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      location: [''],
      isActive: [true]
    })
    // this.updateSubmit();
    // console.log('Enum', this.BloodGroup)
  }

  delete(id: number, list: any) {
    debugger
    this.alert.openPopup(id, list);
    if(this.alert.clickYes)
    {
    this.employeeList.deleteEmployeeData(id).subscribe((res) => {
      console.log("data delete successfully"), this.ngOnInit();
      // this.alert.openPopup(id,list)
    }, error => { console.log("Error found", id) })
  }
  }
  update(event: any, id: number) {
    this.updateArray.push(event);
    this.record_edit.emit(this.updateArray);
    console.log("update value got:", this.updateArray);
    this.route.navigate([`./admin/employee/edit/${id}`]);
  }

  updateSubmit() {
    console.log("update submit: ", this.Addetails.value)
    this.employeeList.updateEmployeeData(this.Addetails.value).subscribe((res) => { alert("data updated successfull"); location.reload() }, error => { alert("update error found") })
  }

}
