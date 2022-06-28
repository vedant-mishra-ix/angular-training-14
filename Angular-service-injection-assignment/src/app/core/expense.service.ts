import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }
  Expenses:any[]=[];

  getMonths(){
   return [
      { id: 1, name: 'Jan', totalAmount: 0 },
      { id: 2, name: 'Feb', totalAmount: 0 },
      { id: 3, name: 'Mar', totalAmount: 0 },
      { id: 4, name: 'April', totalAmount: 0 },
      { id: 5, name: 'May', totalAmount: 0 },
      { id: 6, name: 'June', totalAmount: 0 },
      { id: 7, name: 'July', totalAmount: 0 },
      { id: 8, name: 'aug', totalAmount: 0 },
      { id: 9, name: 'Sept', totalAmount: 0 },
      { id: 10, name: 'Oct', totalAmount: 0 },
      { id: 11, name: 'Nov', totalAmount: 0 },
      { id: 12, name: 'Dec', totalAmount: 0 },]
  }
  addExpnse(exp:any)
  {
    this.Expenses.push(exp);
  }
  remove(index:number)
  {
    this.Expenses.splice(index,1)
  }
}
