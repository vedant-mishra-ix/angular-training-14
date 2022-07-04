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
  Error = 'red';
  Valid = 'green';
  submit:boolean = true;
  editProfile:FormGroup = new FormGroup({});
  workexperience:FormGroup= new FormGroup({});
  array:any[] = [];
  DynamicArray:any =[];
  age:number=0;
  currentYear:number=0;
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
      mobile:['',[Validators.required,Validators.maxLength(10),Validators.pattern(/[^a-zA-Z]/)]],
      address:['',Validators.required],
      otherEmail:['',[Validators.required,Validators.pattern(/\b[^0-9]([a-z]{1,}|[A-Z0-9]{1,})@[a-zA-z]{1,}\./)]],
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
  })
}
  ngOnInit(): void {
    this.workexperience = this.fb.group({
      previousCompanyName:['',Validators.required],
      jobTitle:['',Validators.required],
      fromDate:['',Validators.required],
      toDate:['',Validators.required],
      jobDescriptions:['',Validators.required],
      relevance:['',Validators.required],
      addField: new FormArray([])
    })
  }
  onSubmit()
  {
    this.submit = false;

    if(this.editProfile.valid && this.currentYear < 2022 && this.age > 18)
    {
      this.array.push(this.workexperience.value);
      console.log("Reactive Form Value:",this.editProfile.value);
      console.log("personal array", this.personal.value.mobile);
      console.log("new array", this.array);
      this.ageCalculate();
      this.dynamicForm();
      this.joinningDate();
      console.log("joiniing date: ", this.currentYear)
    }
    else
    {
      alert("Please fill all field correctly");
    }
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
  get f()
  {
    return this.workexperience.controls;
  }
  get t()
  {
    return this.f['addField'] as FormArray
  }
  get formgroup()
  {
    return this.t.controls as FormGroup[];
  }

  autoGenerateForm() {
    // debugger
    // const previousCompanyName = e.target.value ;
    // const jobTitle = e.target.value;
    // const fromDate = e.target.value;
    // const toDate = e.target.value;
    // const jobDescriptions = e.target.value;
    // const relevance = e.target.value;
      for (let i = this.t.length ; i <= this.array.length; i++) {
        this.t.push(
          this.fb.group({
            previousCompanyName:[''],
            jobTitle:[''],
            fromDate:[''],
            toDate:[''],
            jobDescriptions:[''],
            relevance:[''],
          })
        );
      }
    }
    dynamicForm()
    {
      console.log("Dynamic form value:", this.workexperience.value);
    }





  // add()
  // {
  //   this.addField.push(this.workexperience);
  //   this.DynamicArray.push(this.addField);
  // }
  joinningDate()
  {
    let currentYear = new Date(this.editProfile.value.dateOfJoining);
    let currentYearValue = currentYear.getFullYear();
    this.currentYear = currentYearValue;
  }
  ageCalculate()
  {
    let currentYear = new Date();
    let dob = new Date(this.personal.value.birthDate);
    let year = dob.getFullYear();
    let currentYearValue = currentYear.getFullYear()
    this.currentYear = currentYearValue;
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
 // *********************************Notes

//  The KeyValue Pipe converts given Object or Map into an array of key-value pairs.
//   We can use this with the ngFor to loop through the object keys.
//    The keyValue accepts the one argument compareFn ,
//     which we can use to set the custom sort to the pipe.
