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
    {id:1,monthname:'jan'},
    {id:2,monthname:'feb'},
    {id:3,monthname:'mar'},
    {id:4,monthname:'april'},
    {id:5,monthname:'may'},
    {id:6,monthname:'june'},
    {id:7,monthname:'july'},
    {id:8,monthname:'aug'},
    {id:9,monthname:'sept'},
    {id:10,monthname:'oct'},
    {id:11,monthname:'nov'},
    {id:12,monthname:'dec'},
    ];
  arr:any;
  month_number:any;
  month_arr:any =[{month_value:''}];
  monthlyShow()
  {
    this.arr = this.expense.expenxe_list
    // let result = text.slice(6,7);
    // console.log("ddd:" ,result)
    for(var i = 0 ; i < this.arr.length ; i++)
    {
      this.month_number = this.arr[i].date.slice(6,7);
      this.month_arr.month_value = this.month_number;
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
      if(this.exp_month[j-1].id == this.month_number)
      {
        console.log("find id" , this.exp_month[j-1].monthname);
        this.month_store.push(this.exp_month[j-1]);
        console.log("store success:" , this.month_store)
        // if(this.exp_month[j-1].id == this.month_store[1].id)
        // {
        //   this.month_store.pop(this.exp_month[j-1])
        //   console.log("duplicate found")
        // }
        break
      }
      else
      {
        console.log("not found")
      }
    }
  }
  final_month:any=[{month_name:'',amount:''}];
  final_month_result()
  {
    for(var i = 0 ; i < this.month_store.length ; i++)
    {
      this.final_month[i] = this.month_store;
      console.log("duplicate removed:", this.final_month[i])
      console.log("first find:", this.month_store[i].id)
      for(var j = i+1 ; j < this.month_store.length ; j++)
      {
       console.log("find i", this.month_store[i]);
       console.log("second find j" , this.month_store[j])
       if(this.month_store[i].id == this.month_store[j].id)
       {
         console.log("seee",this.month_store.pop(this.month_store[j-1]))
        //  this.final_month.month = this.month_store[j-1].monthname;
        //  console.log("duplicate removed:", this.final_month)
       }
      }
    }
  }
  total_amount_money:any;
  money:any = 0;
  total_amount()
  {
    for(var i = 0 ; i < this.exp_month.length ; i++)
    {
      for(var j = 1 ; j < this.add_list.length ; j++)
      {
        if(this.exp_month[i].monthname == 'jan')
        {
          this.money = this.add_list[j].rent+this.add_list[j].travel+this.add_list[j].food;
          this.total_amount_money= this.money;
        }
        if(this.exp_month[i].monthname == 'feb')
        {
          this.money = this.add_list[j].rent+this.add_list[j].travel+this.add_list[j].food;
          this.total_amount_money= this.money;
        }

      }
    }
    console.log("totoal amount:", this.total_amount_money)
  }
}
