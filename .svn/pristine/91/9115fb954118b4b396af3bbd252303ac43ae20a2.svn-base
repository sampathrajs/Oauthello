import { Injectable, ViewContainerRef } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent,HttpInterceptor,HttpHeaders,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {CommonService} from '../shared/common.services';
import 'rxjs/add/operator/do';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private service: CommonService,private route:Router) {

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var headers = {};
        headers['Content-Type'] = 'application/json';

        if(request.url.indexOf("/token")>-1)
        {
            headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        else{
            var tokendata = this.service.getToken();
    headers['Authorization'] = `Bearer ${tokendata.access_token}`;    
        }
        request = request.clone({ setHeaders: headers });
        return next.handle(request).do(evt=>{
            if(evt instanceof HttpResponse){
            }
        },err=>{
            if(err && err.statusText == 'Unauthorized'){            
                this.service.IsAuthorized=true;
                this.route.navigate(['login']);
                return 0;
            }
        });
    }
}