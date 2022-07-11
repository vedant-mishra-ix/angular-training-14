import { Injectable, ViewChild } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../auth-guard/auth-guard.service';
import { LoaderComponent } from 'src/app/share/components/loader/loader.component';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

  @ViewChild(LoaderComponent) loader!:LoaderComponent;
  constructor(private authService : AuthGuardService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();
    if(token && token !== '')
    {
      const tokenreq = request.clone({
        headers:request.headers.set('Authorization', 'Bearer ' + token),
      });
      return next.handle(tokenreq)
    }
    return next.handle(request);
  }
}
