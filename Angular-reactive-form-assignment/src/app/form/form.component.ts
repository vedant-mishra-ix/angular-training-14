import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, Validators, FormArray} from '@angular/forms';
import { FormEnum } from '../core/model/form-enum';
import { TshirtSize } from '../core/model/tshirt-size';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  tshirtsSize = TshirtSize;
  bloodGroup = FormEnum;
  tshirtKey = [];
  bloodKey = [];
  ageError = 'red';
  ageValid = 'green';
  submit:boolean = true;
  editProfile:FormGroup = new FormGroup({});
  workexperience:FormGroup = new FormGroup({});
  DynamicArray:any =[];
  age:number=0;
  constructor(private fb: FormBuilder)
  {
    this.editProfile = this.fb.group({
    employeeNo:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    firstName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    middleName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    lastName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    departMent:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    Location:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    workPhone:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    salaryRevision:['',[Validators.required]],
    dateOfJoining:['',[Validators.required]],
    personal:this.fb.group({
      mobile:['',[Validators.required,Validators.maxLength(10)]],
      address:['',Validators.required],
      otherEmail:['',Validators.required],
      tags:['',Validators.required],
      birthDate:['',Validators.required],
      currentTshirtSize:['',Validators.required],
      martialStatus:['',Validators.required],
      bloodGroup:['',Validators.required],
      currentAge:['',Validators.required],
    }),
    summery:this.fb.group({
      jobDescription:['',Validators.required],
      aboutMe:['',Validators.required],
      expertise:['',Validators.required],
      presentAddress:['',Validators.required],
      residencePhone:['',Validators.required],
    }),
    addField:fb.array([
    ])
  })
  this.workexperience = this.fb.group({
    previousCompanyName:[''],
    jobTitle:[''],
    fromDate:[''],
    toDate:[''],
    jobDescriptions:[''],
    relevance:[''],
  })
}
  ngOnInit(): void {
  }
  onSubmit()
  {
      console.log("Reactive Form Value:",this.editProfile.value);
      console.log("Form array", this.workexperience.value)
      console.log("personal array", this.personal.value.mobile)
      this.ageCalculate()
  }
  get employeeNo()
  {
    return this.editProfile.controls;  // this approch is better
  }

  get personal()
  {
    return this.editProfile.get('personal') as FormGroup;
  }
  get summery()
  {
    return this.editProfile.get('summery') as FormGroup;
  }
  get addField()
  {
    return this.editProfile.controls['addField'] as FormArray
  }
  add()
  {
    this.addField.push(this.workexperience);
    this.DynamicArray.push(this.addField);
  }
  ageCalculate()
  {
    let currentYear = new Date();
    let dob = new Date(this.personal.value.birthDate);
    let year = dob.getFullYear();
    let currentYearValue = currentYear.getFullYear()
    this.age = currentYearValue-year;

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
