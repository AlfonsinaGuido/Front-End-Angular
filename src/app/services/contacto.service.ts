import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../model/contacto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
   // contactoURL = 'http://localhost:8080/contacto/';
   contactoURL = 'https://backendap-alfonsinaguido.koyeb.app/contacto/';
 

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(this.contactoURL + 'lista');
  }

  public detail(id: number): Observable<Contacto>{
    return this.httpClient.get<Contacto>(this.contactoURL + `detail/${id}`);
  }

  public save(contacto: Contacto): Observable<any>{
    return this.httpClient.post<any>(this.contactoURL + 'create', contacto);
  }

  public update(id: number, contacto: Contacto): Observable<any>{
    return this.httpClient.put<any>(this.contactoURL + `update/${id}`, contacto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.contactoURL + `delete/${id}`);
  }

}
