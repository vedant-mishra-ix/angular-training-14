import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient) { }

  getData():Observable<any>
  {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }
}
