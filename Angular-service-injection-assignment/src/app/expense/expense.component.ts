import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../core/expense.service';
import {ExpenseModel} from '../core/model/expense-model';
import {MonthModel} from '../core/model/month-model'


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  item='';
  date='';
  amount=0;
  months: MonthModel[] = [];
  expenses:ExpenseModel [] = [];
  expensesTemp: ExpenseModel[] = [];

  constructor(private expenseService: ExpenseService) { }
  ngOnInit(): void {
    this.months = this.expenseService.getMonths();
    this.getExpenses();
  }
  getExpenses() {
    this.expenses = this.expenseService.Expenses;
    this.expensesTemp=this.expenses;
  }
  addExpenses()
  {
    if(!this.item || !this.date || !this.amount ){
      alert("null value not allowed");
    }else{
      let expenseData: ExpenseModel = { item: this.item, date: this.date, amount: this.amount };
      this.expenseService.addExpnse(expenseData);
      this.months[this.getMonthIndex(expenseData.date)].totalAmount += expenseData.amount;
    }
  }
  delete(index:number)
  {
    this.months[this.getMonthIndex(this.expenses[index].date)].totalAmount -= this.expenses[index].amount;
    this.expenseService.remove(index);
  }
  getMonthIndex(date: string) {
    const dateObj = new Date(date);
    return this.months.findIndex(s => s.id == dateObj.getUTCMonth() + 1);
  }
  filterData(month:number)
  {
    this.expenses = this.expensesTemp.filter(s => {
      const dateObj = new Date(s.date);
      if (dateObj.getMonth() + 1 == month) {
        return s;
      } else {
        return false;
      }
    });
  }
}
