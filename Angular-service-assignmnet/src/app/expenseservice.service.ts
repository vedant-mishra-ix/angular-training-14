import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseserviceService {

  constructor() { }
  expenxe_list= [
    {
      id:1,
      date:'',
      travel:'',
      food:'',
      rent:'',
    }
  ]
  add_expnse(rupee:any)
  {
    this.expenxe_list.push(rupee)
  }
  delete(index:any)
  {
    this.expenxe_list.splice(index,1)
  }
}
