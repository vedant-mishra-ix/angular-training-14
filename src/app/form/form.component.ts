import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, FormArrayName } from '@angular/forms';
import { FormEnum } from '../core/model/form-enum';
import { TshirtSize } from '../core/model/tshirt-size';
import {Form} from '../core/model/form';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  tshirtsSize = TshirtSize;
  bloodGroup = FormEnum;
  Error = 'red';
  Valid = 'green';
  submit: boolean = true;
  editProfile: FormGroup = new FormGroup({});
  workexperience: FormGroup = new FormGroup({});
  age: number = 0;
  currentYear: number = 0;
  currentFromDate: number = 0;
  selectFromMonth: number = 0;
  currentFromMonth: number = 0;
  currentToDate: number = 0;
  selectToMonth: number = 0;
  currentToMonth: number = 0;
  salaryYear:number=0;

  FormType!:Form;

  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.editProfile = this.fb.group({
      employeeNo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      middleName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      departMent: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      Location: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      workPhone: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      salaryRevision: ['', [Validators.required]],
      dateOfJoining: ['', [Validators.required]],
      personal: this.fb.group({
        mobile: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/[^a-zA-Z]/)]],
        address: ['', Validators.required],
        otherEmail: ['', [Validators.required, Validators.pattern(/\b[^0-9]([a-z]{1,}|[A-Z0-9]{1,})@[a-zA-z]{1,}\./)]],
        tags: ['', Validators.required],
        birthDate: ['', Validators.required],
        currentTshirtSize: ['', Validators.required],
        martialStatus: ['', Validators.required],
        bloodGroup: ['', Validators.required],
        currentAge: ['', Validators.required],
      }),
      summery: this.fb.group({
        jobDescription: ['', Validators.required],
        aboutMe: ['', Validators.required],
        expertise: ['', Validators.required],
        presentAddress: ['', Validators.required],
        residencePhone: ['', Validators.required],
      }),

      workexperience: this.fb.array([this.ExperienceAdd()]),
    })
  }

  ExperienceAdd() {
    return this.fb.group({
      previousCompanyName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      jobDescriptions: ['', Validators.required],
      relevance: ['', Validators.required]
    })
  }
  onSubmit() {
    this.submit = false;

    // if (this.editProfile.valid && this.currentYear < 2022 && this.age > 18 && this.currentFromDate < 2022) {
    //   console.log("Reactive Form Value:", this.editProfile.value);
    //   console.log("personal array", this.personal.value.mobile);
    //   this.ageCalculate();
    //   this.joinningDate();
    //   this.fromDate();
    //   this.toDate();
    //   console.log("joiniing date: ", this.currentYear)
    // }
    // else {
    //   alert("Please fill all field correctly");
    // }
    console.log(this.editProfile.value);
  }
  get employeeNo() {
    return this.editProfile.controls;  // this approch is better
  }

  get personal() {
    return this.editProfile.get('personal') as FormGroup;
  }
  get summery() {
    return this.editProfile.get('summery') as FormGroup;
  }
  get f() {
    return this.editProfile.controls;
  }
  get fEmp(){
    console.log(((this.editProfile.get('workexperience') as FormArray).controls[0] as FormGroup).controls);

    return (((this.editProfile.get('workexperience') as FormArray).controls[0] as FormGroup).controls)
    //return this.workexperience.controls;
    //return false;
  }
  get formArr() {
    return this.editProfile.get('workexperience') as FormArray;
  }
  addNewForm() {
    this.formArr.push(this.ExperienceAdd());
  }
  removeForm(index: number) {
    this.formArr.removeAt(index);
  }
  joinningDate() {
    let currentYear = new Date(this.editProfile.value.dateOfJoining);
    let currentYearValue = currentYear.getFullYear();
    this.currentYear = currentYearValue;
  }
  SalaryDate()
  {
    let SalaryYear = new Date(this.editProfile.value.salaryRevision);
    let currrentYear = SalaryYear.getFullYear();
    this.salaryYear = currrentYear;
  }
  ageCalculate() {
    let currentYear = new Date();
    let dob = new Date(this.personal.value.birthDate);
    let year = dob.getFullYear();
    let currentYearValue = currentYear.getFullYear()
    this.currentYear = currentYearValue;
    this.age = currentYearValue - year;

  }
  fromDate() {
    let currentMonth = new Date();
    let fromYear = new Date(this.workexperience.value.fromDate);
    let currentfromYear = fromYear.getFullYear();
    let selectMonth = fromYear.getMonth() + 1;
    this.currentFromDate = currentfromYear;
    this.selectFromMonth = selectMonth;
    this.currentFromMonth = currentMonth.getMonth() + 1
  }
  toDate() {
    let currentMonth = new Date();
    let fromYear = new Date(this.workexperience.value.toDate);
    let currentfromYear = fromYear.getFullYear();
    let selectMonth = fromYear.getMonth() + 1;
    this.currentToDate = currentfromYear;
    this.selectToMonth = selectMonth;
    this.currentToMonth = currentMonth.getMonth() + 1
  }
}

 // get addField():FormArray
  // {
  //   return this.workexperience.get('addField') as FormArray;
  //   // return this.addField.controls['les'] as FormArray
  // }

 // newField():FormGroup
  // {
  //   return this.fb.group({
  //     previousCompanyName:[''],
  //     jobTitle:[''],
  //     fromDate:[''],
  //     toDate:[''],
  //     jobDescriptions:[''],
  //     relevance:[''],
  //   })
  // }
// commented code (other logics)
 // dynamic form
  // get users()
  // {
  //   return this.editProfile.get('userexperience') as FormArray;
  // }
  //  addexperience()
  //  {
  //   let array = this.editProfile.get('userexperience') as FormArray;
  //   let Newarray = this.fb.group({
  //     previousCompanyName:[''],
  //       jobTitle:'',
  //       fromDate:'',
  //       toDate:'',
  //       jobDescriptions:'',
  //       relevance:'',
  //   })
  //   array.push(Newarray);
  //  }

  // get contf()
  // {
  //   return (<FormArray>this.editProfile.get('addf')).controls;
  // }
  // addh()
  // {
  //    (<FormArray>this.editProfile.get('addf')).push(this.workexperience)
  // }


    // get basicInformation()
  // {
  //   return this.editProfile.get('employeeNo');  // this is also working but it's very lengthy process
  // }


   // get workexperience()
  // {
  //   return this.editProfile.get('workexperience') as FormGroup;
  // }

   // lessons: this.fb.array([
    //   this.fb.control('')
    // ])
    // userexperience: new FormArray([
    //   this.fb.group({
    //     previousCompanyName:new FormControl(''),
    //     jobTitle:new FormControl(''),
    //     fromDate:new FormControl(''),
    //     toDate:new FormControl(''),
    //     jobDescriptions:new FormControl(''),
    //     relevance:new FormControl(''),
    //   })
    // ])
 // workexperience:fb.group({
    //   previousCompanyName:[''],
    //   jobTitle:[''],
    //   fromDate:[''],
    //   toDate:[''],
    //   jobDescriptions:[''],
    //   relevance:[''],
    // }),
 // *********************************Notes

//  The KeyValue Pipe converts given Object or Map into an array of key-value pairs.
//   We can use this with the ngFor to loop through the object keys.
//    The keyValue accepts the one argument compareFn ,
//     which we can use to set the custom sort to the pipe.
