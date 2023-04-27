import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AllWebSiteService {
  url:string="http://localhost:8083";
  constructor(private http:HttpClient) {}

  obtenerDatos(): Observable<any> {  
      return this.http.get<any>(this.url+"/persona");
  }
}
