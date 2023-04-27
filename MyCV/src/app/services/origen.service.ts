import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrigenService {
  url:string="http://localhost:8083";


  constructor(private http:HttpClient) { }

  obtenerOrigen(id: number): Observable<any> {  
      return this.http.get<any>(`${this.url}/persona/${id}/origen`);
  }


}
