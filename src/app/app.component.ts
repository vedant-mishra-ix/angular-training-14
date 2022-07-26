import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'share-module';

  constructor(
    public http: HttpClient
  ) { }

  makeHttpCall() {
    this.http.get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((r) => {
        console.log(r);
      });
    }
}
