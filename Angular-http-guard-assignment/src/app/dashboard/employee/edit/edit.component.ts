import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Bloodgroup } from 'src/app/core/services/model/bloodgroup';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  // @Output() record_edit: EventEmitter<any> = new EventEmitter();
  Error ='red';
  Success ='green';
  id!: any;
  BloodGroup: any = Bloodgroup;
  EmployeeList: any = [];
  MatchDetails: any = [];
  Addetails: FormGroup = new FormGroup({});
  constructor(private employeeList: EmployeeService, private fb: FormBuilder, private route: Router, private idRoute: ActivatedRoute) { }
  // @ViewChild(ListComponent) listdata!:ListComponent;
  // @Input() updateArray:any[] = [];
  ngOnInit(): void {
    this.employeeList.getEmployeeData()
      .subscribe(res => {
        this.EmployeeList.push(res.result);
        // console.log("noo", this.EmployeeList)
        this.logdata();
      });

    this.Addetails = this.fb.group({
      id: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      location: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      aboutme: ['', [Validators.required]],
      bloodGroup: ['', [Validators.required]],
      isActive: [true]
    })
    this.id = this.idRoute.snapshot.paramMap.get('id');
    alert("id:" + this.id)
  }
  logdata() {
    console.log("viewChild: ", this.EmployeeList)
    for (let i = 0; i < this.EmployeeList.length; i++) {
      // console.log("loop:", this.EmployeeList[i][i])
      for (let j = 0; j < this.EmployeeList[i].length; j++) {
        // console.log("Loop 1:", this.EmployeeList[i][j])
        if (this.id == this.EmployeeList[i][j].id) {
          // console.log("Id match: ", this.EmployeeList[i][j]);
          this.MatchDetails = this.EmployeeList[i][j];
          break;
        }
        else {
          console.log("Not found ID")
        }
      }
    }
    // console.log("Id Match Value: ", this.MatchDetails) // id match value
  }
  updateSubmit() {
    console.log("update submit: ", this.Addetails.value)
    this.employeeList.updateEmployeeData(this.Addetails.value).subscribe((res) => { alert("data updated successfull"); location.reload() }, error => { alert("update error found") })
    this.route.navigate(['/admin/employee/list']);
  }
  get Edit() {
    return this.Addetails.controls;
  }
}
