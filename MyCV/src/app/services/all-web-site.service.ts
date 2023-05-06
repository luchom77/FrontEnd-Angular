import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IPersona } from '../modelos/persona.model';


@Injectable({
  providedIn: 'root'
})
export class AllWebSiteService {
  url:string="http://localhost:8083";
  constructor(private http:HttpClient) {}

 public obtenerDatos(idPersona: number): Observable<IPersona> {  
     
    
    return this.http.get<IPersona>(`${this.url}/persona/${idPersona}`);
  }
}
