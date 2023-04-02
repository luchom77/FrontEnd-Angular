import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  autenticacionServicio: any;

  constructor(){}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 

    var currentUser=this.autenticacionServicio.UsuarioAutenticado;
    if(currentUser && currentUser.accesToken){
      req=req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.accessToken}`
        }
      })
    }
    console.log("Interceptor is running " + JSON.stringify(currentUser));
    return next.handle(req);
  }
}
