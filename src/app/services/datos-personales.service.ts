import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosPersonales } from '../model/datos-personales';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {
  datosURL = 'http://localhost:8080/datosPersonales/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<DatosPersonales[]>{
    return this.httpClient.get<DatosPersonales[]>(this.datosURL + 'lista');
  }

  public detail(id: number): Observable<DatosPersonales>{
    return this.httpClient.get<DatosPersonales>(this.datosURL + `detail/${id}`);
  }

  public save(DatosPersonales: DatosPersonales): Observable<any>{
    return this.httpClient.post<any>(this.datosURL + 'create', DatosPersonales);
  }

  public update(id: number, DatosPersonales: DatosPersonales): Observable<any>{
    return this.httpClient.put<any>(this.datosURL + `update/${id}`, DatosPersonales);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.datosURL + `delete/${id}`);
  }

}
