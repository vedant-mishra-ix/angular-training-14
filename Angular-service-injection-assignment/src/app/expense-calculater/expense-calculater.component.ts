import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../core/expense.service';
interface datatypes
{
  date:any;
  expenseType:string;
  description:string;
  amount:string;
}

@Component({
  selector: 'app-expense-calculater',
  templateUrl: './expense-calculater.component.html',
  styleUrls: ['./expense-calculater.component.scss']
})
export class ExpenseCalculaterComponent implements OnInit {
  JanAdd:number=0;
  FebAdd:number=0;
  date='';
  expenseType='';
  description='';
  amount='';
  addExpenseList:any = this.expenseService.Expenses

  monthNumber:any;
  monthArr: any = [{ month_value: '' }];

  monthStore:any=[];

  finalMonth:any=[{month_name:'',amount:''}];

  totalAmountMoney:any=[];
  totalsameMonth:any =[]
  money:any = 0;

  constructor(private expenseService : ExpenseService) { }
  ngOnInit(): void {
  }


  add()
  {
    let addexpense:datatypes =
    {
      date:this.date,
      expenseType:this.expenseType,
      description:this.description,
      amount:this.amount,
    }
    this.expenseService.addExpnse(addexpense);
    console.log(addexpense)
    this.monthlyShow()
  }


  delete(i:number)
  {
    this.expenseService.remove(i)
  }
  months: { id: number, monthname: string }[] = [
    { id: 1, monthname: 'Jan' },
    { id: 2, monthname: 'Feb' },
    { id: 3, monthname: 'Mar' },
    { id: 4, monthname: 'April' },
    { id: 5, monthname: 'May' },
    { id: 6, monthname: 'June' },
    { id: 7, monthname: 'July' },
    { id: 8, monthname: 'aug' },
    { id: 9, monthname: 'Sept' },
    { id: 10, monthname: 'Oct' },
    { id: 11, monthname: 'Nov' },
    { id: 12, monthname: 'Dec' },
  ];

    monthlyShow()
    {
      this.addExpenseList = this.expenseService.Expenses
      for(var i = 0 ; i < this.addExpenseList.length ; i++)
      {
        this.monthNumber = this.addExpenseList[i].date.slice(6,7);
        this.monthArr.month_value = this.monthNumber;
        // console.log("month-number-variable" , this.monthNumber)
        // console.log("month-array" , this.monthArr)
        // console.log("months-array",this.months[i])
      }
      this.monthDisplay()
    }

  monthDisplay()
  {
    for(var j = 0 ; j <= this.months.length ; j++)
    {
      // console.log("Months-list:",this.months[j])
      // console.log("month-list-id: ", this.months[j].id)
      if(this.months[j].id == this.monthNumber)
      {
        this.monthStore.push(this.months[j].monthname);
        // console.log("month value store successfully:" , this.monthStore)
        break
      }
      else
      {
        console.log("not found");
      }
    }
    this.finalMonthResult()
  }

  finalMonthResult()
  {
    for(var i = 0 ; i < this.monthStore.length ; i++)
    {
      this.finalMonth[i] = this.monthStore;
      // console.log("finalmonthname-amount:", this.finalMonth[i])
      // console.log("monthstore-id:", this.monthStore[i].id)
      for(var j = i+1 ; j < this.monthStore.length ; j++)
      {
      //  console.log("monthstore find i index", this.monthStore[i]);
      //  console.log("monthstore find j index" , this.monthStore[j])
       if(this.monthStore[i].id == this.monthStore[j].id)
       {
        // this.monthStore.pop(this.monthStore[j-1])
        //  console.log("duplicate month name removed",this.monthStore.pop(this.monthStore[j-1]))
       }
      }
    }
    this.totalAmount()
  }

  totalAmount()
  {
    for(let i = 0 ; i < this.months.length ; i++)
    {
        if(this.months[i].monthname == 'Jan')
        {
          // this.money =  this.money+this.addExpenseList[j].amount;
          this.JanAdd= this.JanAdd+this.addExpenseList[i].amount;
          // console.log("totoal amount:", this.JanAdd)
          this.totalAmountMoney[i] = this.JanAdd;
          break;
        }
    }
  }
}
