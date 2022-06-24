import { Component } from '@angular/core';
import { ExpenseserviceService } from './expenseservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-service';
  constructor(private expense:ExpenseserviceService){
    console.log('list: ', this.expense)
  }
  date:any ='';
  travel:any ='';
  food:any = '';
  rent:any = '';
  amount:any = '';
  add_list:any= this.expense.expenxe_list;
  add()
  {
      let add_expenses  = {
      date:this.date,
      travel:this.travel,
      food:this.food,
      rent:this.rent,
    }
    this.expense.add_expnse(add_expenses)
    console.log("find:  ", this.expense.expenxe_list)
  }
  alertMessage()
  {
    alert("Expense Added Successfully");
  }
  delete_record(i:any)
  {
    this.expense.delete(i)
  }
  month = new Date();
  exp_month:any =[
    {id:'1',monthname:'jan'},
    {id:'2',monthname:'feb'},
    {id:'3',monthname:'mar'},
    {id:'4',monthname:'april'},
    {id:'5',monthname:'may'},
    {id:'6',monthname:'june'},
    {id:'7',monthname:'july'},
    {id:'8',monthname:'aug'},
    {id:'9',monthname:'sept'},
    {id:'10',monthname:'oct'},
    {id:'11',monthname:'nov'},
    {id:'12',monthname:'dec'},
    ];
  arr:any;
  month_number:any; // containe month as a digit
  month_arr:any =[{month_value:''}];  // it's container month value as a array
  monthlyShow()
  {
    this.arr = this.expense.expenxe_list // it is containing all service list value
    // let result = text.slice(6,7);
    // console.log("ddd:" ,result)
    for(var i = 0 ; i < this.arr.length ; i++)
    {
      this.month_number = this.arr[i].date.slice(6,7); // it' through i am breaking the date into the number
      this.month_arr.month_value = this.month_number;    // then store month number in array
      console.log("ddd:" , this.month_number)
      console.log("aaa:" , this.month_arr)
      console.log("ppp:",this.exp_month[i])
      // if(this.exp_month[i] ==)
    }
  }
  month_store:any = [];
  monthdisplay()
  {
    for(var j = 1 ; j <= this.exp_month.length ; j++)
    {
      console.log("fff:",this.exp_month[j-1])
      // console.log('month show value: ', this.month_arr.month_value)
      console.log("Gg: ", this.exp_month[j-1].id)
      if(this.exp_month[j-1].id == this.month_number)    // here we are storing month name or id on the basisi of slection
      {
        console.log("find id" , this.exp_month[j-1].monthname);
        this.month_store.push(this.exp_month[j-1]);        // here we aree pushing month valye in month_store  for  storing multiple value
        console.log("store success:" , this.month_store)
        break
      }
      else
      {
        console.log("not found")
      }
    }
  }
}
