import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  open(content: any, arg1: { ariaLabelledBy: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
