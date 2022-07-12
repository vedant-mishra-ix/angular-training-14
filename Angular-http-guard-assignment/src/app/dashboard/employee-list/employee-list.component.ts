import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { window } from 'rxjs';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  // @Output() record_edit: EventEmitter<any> = new EventEmitter();
  EmployeeList:any=[];
  updateArray:any= [];
  addUpdateData:any=[];
  Addetails:FormGroup = new FormGroup({});
  constructor(private employeeList : EmployeeService , private fb:FormBuilder) { }

    ngOnInit(): void {
    this.employeeList.getEmployeeData().subscribe( res =>
      { this.EmployeeList = res;
        console.log("value found", this.EmployeeList.result)
      });

      this.Addetails = this.fb.group({
        id:[''],
        firstName:[''],
        lastName:[''],
        location:[''],
        isActive:[true]
      })
      // this.updateSubmit();
  }

  delete(id:number)
  {
    this.employeeList.deleteEmployeeData(id).subscribe((res) =>
    {console.log("data delete successfully"),  location.reload();
  }, error => {console.log("Error found" , id)})
  }
  update(event:any)
  {
    this.updateArray = event;
    // this.record_edit.emit(this.updateArray)
    console.log("update value got:", this.updateArray)
  }

  updateSubmit()
  {
    console.log("update submit: ", this.Addetails.value)
    this.employeeList.updateEmployeeData(this.Addetails.value).subscribe((res) =>
    {alert("data updated successfull"); location.reload()}, error => {alert("update error found")})
  }
}
