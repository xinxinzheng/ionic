import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest ,HttpResponse , HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs' ;
import 'rxjs/add/operator/do';
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor{
  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do(event => {
      if (event instanceof HttpResponse) {
          
      }
    },err => {
      if (err instanceof HttpErrorResponse ) {
        if(err.status == 403){
        //   this._router.navigate(['/login']);
        }
      }
    });
  }
}
